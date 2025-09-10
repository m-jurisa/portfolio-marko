"use client";

import { useCallback, useEffect, useState } from "react";
import Button from "./Button";

/* --- Helpers ----------------------------------------------------------- */
function setQueryParam(key, value) {
  if (typeof window === "undefined") return;
  const url = new URL(window.location.href);
  if (value) url.searchParams.set(key, value);
  else url.searchParams.delete(key);
  window.history.replaceState({}, "", url.toString());
}

const ACCENTS = {
  vollzeit: { hex: "#f59e0b", rgb: "245 158 11" }, // amber
  freiberuflich: { hex: "#f97316", rgb: "249 115 22" }, // orange
};

const VALID_MODES = ["vollzeit", "freiberuflich"];

/* --- DropZone Component ------------------------------------------------ */
function DropZone({ 
  onFilesSelected, 
  acceptedFileTypes = {
    'image/*': ['.jpeg', '.jpg', '.png', '.gif', '.webp'],
    'application/pdf': ['.pdf'],
    'text/*': ['.txt', '.md'],
    'application/zip': ['.zip']
  },
  maxFileSize = 10485760, // 10MB
  maxFiles = 5,
  className = "",
  isVisible = false
}) {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [isUploading, setIsUploading] = useState(false);
  const [isDragActive, setIsDragActive] = useState(false);
  const [isDragReject, setIsDragReject] = useState(false);

  const validateFile = useCallback((file) => {
    // Check file size
    if (file.size > maxFileSize) return false;
    
    // Check file type
    const fileType = file.type;
    const fileExtension = '.' + file.name.split('.').pop().toLowerCase();
    
    return Object.entries(acceptedFileTypes).some(([mimePattern, extensions]) => {
      const mimeRegex = new RegExp(mimePattern.replace('*', '.*'));
      return mimeRegex.test(fileType) || extensions.includes(fileExtension);
    });
  }, [acceptedFileTypes, maxFileSize]);

  const onDrop = useCallback(async (files) => {
    const acceptedFiles = files.filter(validateFile);
    const rejectedFiles = files.filter(file => !validateFile(file));

    if (rejectedFiles.length > 0) {
      console.warn('Some files were rejected:', rejectedFiles);
    }

    if (acceptedFiles.length === 0) return;

    setIsUploading(true);
    
    try {
      const processedFiles = acceptedFiles.slice(0, maxFiles).map(file => ({
        file,
        id: Math.random().toString(36).substr(2, 9),
        name: file.name,
        size: file.size,
        type: file.type,
        preview: file.type.startsWith('image/') ? URL.createObjectURL(file) : null
      }));

      setUploadedFiles(prev => [...prev, ...processedFiles].slice(0, maxFiles));
      
      if (onFilesSelected) {
        onFilesSelected(processedFiles);
      }
    } catch (error) {
      console.error('Error processing files:', error);
    } finally {
      setIsUploading(false);
    }
  }, [onFilesSelected, maxFileSize, maxFiles, validateFile]);

  const handleDragOver = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (!isDragActive) setIsDragActive(true);
    
    const files = Array.from(e.dataTransfer.files);
    const hasValidFiles = files.some(validateFile);
    setIsDragReject(!hasValidFiles);
  }, [isDragActive, validateFile]);

  const handleDragLeave = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (e.currentTarget.contains(e.relatedTarget)) return;
    
    setIsDragActive(false);
    setIsDragReject(false);
  }, []);

  const handleDrop = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    
    setIsDragActive(false);
    setIsDragReject(false);
    
    const files = Array.from(e.dataTransfer.files);
    onDrop(files);
  }, [onDrop]);

  const handleFileInput = useCallback((e) => {
    const files = Array.from(e.target.files);
    onDrop(files);
    e.target.value = ''; // Reset input
  }, [onDrop]);

  const removeFile = (fileId) => {
    setUploadedFiles(prev => {
      const updated = prev.filter(f => f.id !== fileId);
      prev.forEach(f => {
        if (f.id === fileId && f.preview) {
          URL.revokeObjectURL(f.preview);
        }
      });
      return updated;
    });
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  if (!isVisible) return null;

  return (
    <div className={`w-full mt-8 ${className}`}>
      {/* Drop Zone */}
      <div
        className={`
          relative border-2 border-dashed rounded-lg p-8 text-center cursor-pointer
          transition-all duration-200 ease-in-out
          ${isDragActive && !isDragReject 
            ? 'border-orange-400 bg-orange-50/10' 
            : isDragReject 
            ? 'border-red-400 bg-red-50/10' 
            : 'border-gray-600 hover:border-gray-400'
          }
          ${isUploading ? 'opacity-50 cursor-not-allowed' : ''}
        `}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => !isUploading && document.getElementById('file-input').click()}
      >
        <input
          id="file-input"
          type="file"
          multiple
          className="hidden"
          onChange={handleFileInput}
          accept={Object.entries(acceptedFileTypes).map(([mime, exts]) => 
            mime === 'image/*' ? 'image/*' : exts.join(',')
          ).join(',')}
        />
        
        <div className="flex flex-col items-center gap-4">
          {/* Icon */}
          <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center">
            {isUploading ? (
              <div className="w-6 h-6 border-2 border-orange-400 border-t-transparent rounded-full animate-spin" />
            ) : (
              <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>
            )}
          </div>

          {/* Text */}
          <div className="space-y-2">
            <p className="text-white text-lg font-medium">
              {isDragActive 
                ? isDragReject 
                  ? 'Dateityp nicht unterstützt' 
                  : 'Dateien hier ablegen...'
                : 'Dateien hierher ziehen oder klicken'
              }
            </p>
            <p className="text-gray-400 text-sm">
              Unterstützt: Bilder, PDFs, Text, ZIP • Max. {formatFileSize(maxFileSize)} pro Datei
            </p>
          </div>
        </div>
      </div>

      {/* File List */}
      {uploadedFiles.length > 0 && (
        <div className="mt-6 space-y-3">
          <h3 className="text-white font-medium">Hochgeladene Dateien ({uploadedFiles.length})</h3>
          <div className="space-y-2">
            {uploadedFiles.map((fileData) => (
              <div 
                key={fileData.id}
                className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg border border-gray-700"
              >
                {/* File Icon/Preview */}
                <div className="flex-shrink-0 w-10 h-10 rounded bg-gray-700 flex items-center justify-center">
                  {fileData.preview ? (
                    <img 
                      src={fileData.preview} 
                      alt="" 
                      className="w-full h-full object-cover rounded"
                    />
                  ) : (
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  )}
                </div>

                {/* File Info */}
                <div className="flex-grow min-w-0">
                  <p className="text-white text-sm font-medium truncate">{fileData.name}</p>
                  <p className="text-gray-400 text-xs">{formatFileSize(fileData.size)}</p>
                </div>

                {/* Remove Button */}
                <button
                  onClick={() => removeFile(fileData.id)}
                  className="flex-shrink-0 p-1 text-gray-400 hover:text-red-400 transition-colors"
                  title="Datei entfernen"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

/* --- Hero Component ---------------------------------------------------- */
export default function Hero({ locale = "de", initialMode = "vollzeit" }) {
  const isDE = locale === "de";
  const [showDropZone, setShowDropZone] = useState(false);

  // State: sync with URL (?modus=) and localStorage (per-locale key)
  const storageKey = isDE ? "modus-de" : "modus-en";
  const [mode, setMode] = useState(
    VALID_MODES.includes(initialMode) ? initialMode : "vollzeit"
  );

  // Initialize from URL or localStorage (client only)
  useEffect(() => {
    if (typeof window === "undefined") return;
    const url = new URL(window.location.href);
    const qp = url.searchParams.get("modus");
    if (VALID_MODES.includes(qp)) {
      setMode(qp);
      return;
    }
    const stored = localStorage.getItem(storageKey);
    if (VALID_MODES.includes(stored)) setMode(stored);
  }, [storageKey]);

  // Persist to URL + localStorage on change
  useEffect(() => {
    setQueryParam("modus", mode);
    if (typeof window !== "undefined") localStorage.setItem(storageKey, mode);
  }, [mode, storageKey]);

  // Derived flags + accent (section-level)
  const isVollzeit = mode === "vollzeit";
  const isFreelance = mode === "freiberuflich";
  const sectionAccent = isVollzeit ? ACCENTS.vollzeit : ACCENTS.freiberuflich;

  // Copy
  const titleMain = isDE ? "Ich bin verfügbar für" : "Available for";
  const titleAccent = isDE
    ? isVollzeit
      ? "eine Vollzeitstelle"
      : "freiberufliche Projekte"
    : "freelance projects";

  const sublineDE = isFreelance
    ? "Schnelle, kosteneffiziente IT-Programmierung und Optimierung: Landingpages & Web-Apps (Next.js, Go+htmx), Performance-Tuning, Automatisierungen, Showreels/Social-Assets und 3D-Produkt-Mockups – fokussiert auf klare Ziele und messbare Wirkung."
    : "Softwareentwicklung und Produktumsetzung: Frontend & Backend (React/Next.js, Node/Go), Webdesign & UI-Integration, Motion Design/Video-Postproduktion sowie einfache 3D-Modellierung – für Teams, die Tempo, Qualität und saubere Architektur verbinden.";

  const sublineEN =
    "Design, video editing, and simple 3D—fast turnarounds, clear communication.";

  /* ===== CSS-controlled sizes (no JS breakpoint) ===== */
  const btnSize = "px-3 py-2 text-sm sm:px-6 sm:py-3 sm:text-base";
  const primaryWrapClass = "w-full sm:w-fit";
  const primaryMinWidth = "sm:min-w-[18rem]";
  const gapRow = "gap-3 sm:gap-4";

  const handleFilesSelected = (files) => {
    console.log('Selected files:', files);
    // Handle file upload logic here
  };

  const handleProjectRequest = (e, href) => {
    if (href === "#contact" && isFreelance) {
      e.preventDefault();
      setShowDropZone(!showDropZone);
    }
  };

  return (
    <section
      className="hero-section min-h-screen h-full flex flex-col-reverse sm:flex-col relative"
      style={{ ["--accent"]: sectionAccent.hex, ["--accent-rgb"]: sectionAccent.rgb }}
    >
      <div className="hero-inner flex flex-col gap-6">
        <p className="hero-micro">
          {isDE ? "Hi, ich bin Marko" : "Hi, I'm Marko"}{" "}
          <span className="waving">👋</span> ✨
        </p>
        <p className="muted-text text-base sm:text-lg">
          {isDE
            ? "Softwareentwicklung, Design, Videoproduktion & 3D"
            : "Software engineering, design, video production & 3D"}
        </p>

        {isDE ? (
          <>
            {/* Mode switch */}
            <div className="flex justify-center">
              <div className="segmented" role="tablist" aria-label="Modus wählen">
                <button
                  type="button"
                  className={`segment ${isVollzeit ? "is-active" : ""}`}
                  onClick={() => setMode("vollzeit")}
                  role="tab"
                  aria-selected={isVollzeit}
                  aria-controls="panel-vollzeit"
                >
                  Vollzeitstelle
                </button>
                <button
                  type="button"
                  className={`segment ${isFreelance ? "is-active" : ""}`}
                  onClick={() => setMode("freiberuflich")}
                  role="tab"
                  aria-selected={isFreelance}
                  aria-controls="panel-freiberuflich"
                >
                  Freiberuflich
                </button>
              </div>
            </div>

            <h1 className="hero-title">
              <span className="block">{titleMain}</span>
              <span className="block accent-text">{titleAccent}.</span>
            </h1>
            <p className="muted-text subline">{sublineDE}</p>

            {/* Logos */}
            <div className="mt-2 overflow-hidden">
              <div className="trust-strip marquee">
                <div className="marquee__inner">
                  <img src="/assets/icons/ps.svg" alt="Photoshop" />
                  <img src="/assets/icons/pr.svg" alt="Premiere Pro" />
                  <img src="/assets/aftereffects.png" alt="After Effects" />
                  <img src="/assets/figma.svg" alt="Figma" />
                  <img src="/assets/cards/card-img-blender.webp" alt="Blender" />
                  <img src="/assets/icons/go.svg" alt="Go" />
                  <img src="/assets/icons/htmx.svg" alt="htmx" />
                </div>
                <div className="marquee__inner" aria-hidden="true">
                  <img src="/assets/icons/ps.svg" alt="" />
                  <img src="/assets/icons/pr.svg" alt="" />
                  <img src="/assets/aftereffects.png" alt="" />
                  <img src="/assets/figma.svg" alt="" />
                  <img src="/assets/cards/card-img-blender.webp" alt="" />
                  <img src="/assets/icons/go.svg" alt="" />
                  <img src="/assets/icons/htmx.svg" alt="" />
                </div>
              </div>
            </div>

            {/* Primary CTAs */}
            <div className={`flex flex-col sm:flex-row ${gapRow} justify-center`}>
              <a
                href={`/de/vollzeit`}
                className={primaryWrapClass}
                aria-current={isVollzeit ? "page" : undefined}
                style={{
                  ["--accent"]: ACCENTS.vollzeit.hex,
                  ["--accent-rgb"]: ACCENTS.vollzeit.rgb,
                }}
                id="panel-vollzeit"
                role="tabpanel"
                aria-labelledby="Vollzeitstelle"
              >
                <Button
                  name="Vollzeitstelle (Festanstellung)"
                  variant={isVollzeit ? "primary" : "secondary"}
                  containerClass={`${btnSize} ${primaryMinWidth} w-full`}
                />
              </a>

              <a
                href={`/de/freiberuflich`}
                className={primaryWrapClass}
                aria-current={isFreelance ? "page" : undefined}
                style={{
                  ["--accent"]: ACCENTS.freiberuflich.hex,
                  ["--accent-rgb"]: ACCENTS.freiberuflich.rgb,
                }}
                id="panel-freiberuflich"
                role="tabpanel"
                aria-labelledby="Freiberuflich"
              >
                <Button
                  name="Freiberuflich auf Projektbasis"
                  variant={isFreelance ? "primary" : "secondary"}
                  containerClass={`${btnSize} ${primaryMinWidth} w-full`}
                />
              </a>
            </div>

            {/* Secondary rows — unified (same structure/styles) */}
            {(() => {
              const items = isVollzeit
                ? [
                    { href: "#bewerbungsunterlagen", label: "Bewerbungsunterlagen anfragen", variant: "primary" },
                    { href: "/resume.pdf",           label: "Lebenslauf herunterladen",     variant: "secondary", download: true },
                    { href: "#contact",              label: "Kontakt für Bewerbung",        variant: "secondary" },
                  ]
                : [
                    { href: "#contact",     label: "Projekt anfragen",     variant: "primary" },
                    { href: "/de/angebot",  label: "Leistungen & Pakete",  variant: "secondary" },
                    { href: "#contact",     label: "Erstgespräch buchen",  variant: "secondary" },
                  ];

              return (
                <div className="flex flex-col gap-3 sm:flex-row sm:gap-4 justify-center mt-6 w-full">
                  {items.map((it, i) => (
                    <a 
                      key={i} 
                      href={it.href} 
                      className="w-full sm:w-fit" 
                      {...(it.download ? { download: true } : {})}
                      onClick={(e) => handleProjectRequest(e, it.href)}
                    >
                      <Button 
                        name={it.label} 
                        variant={it.variant} 
                        containerClass={`${btnSize} w-full sm:w-auto sm:min-w-[12rem]`}
                      />
                    </a>
                  ))}
                </div>
              );
            })()}

            {/* DropZone for freelance mode */}
            <DropZone 
              isVisible={showDropZone && isFreelance}
              onFilesSelected={handleFilesSelected}
              maxFiles={10}
              maxFileSize={50 * 1024 * 1024} // 50MB
            />

            <div className="mt-6 flex flex-col items-center gap-3">
              <div className="badge">
                <span className="relative inline-flex h-3 w-3">
                  <span className="btn-ping"></span>
                  <span className="btn-ping_dot"></span>
                </span>
                Verfügbar: DE vor Ort und Hybrid / weltweit Remote
              </div>
              <a
                href="#offer-grid"
                className={`text-white/70 border border-purple-950 mt-8 text-purple-800 rounded-full hover:text-white/90 text-sm ${btnSize}`}
              >
                Mehr erfahren ↓
              </a>
            </div>
          </>
        ) : (
          <>
            <h1 className="hero-title">
              <span className="block">Available for</span>
              <span className="block accent-text">freelance projects.</span>
            </h1>
            <p className="muted-text subline">{sublineEN}</p>

            <div className="mt-2 overflow-hidden">
              <div className="trust-strip marquee">
                <div className="marquee__inner">
                  <img src="/assets/icons/ps.svg" alt="Photoshop" />
                  <img src="/assets/icons/pr.svg" alt="Premiere Pro" />
                  <img src="/assets/aftereffects.png" alt="After Effects" />
                  <img src="/assets/figma.svg" alt="Figma" />
                  <img src="/assets/cards/card-img-blender.webp" alt="Blender" />
                  <img src="/assets/icons/go.svg" alt="Go" />
                  <img src="/assets/icons/htmx.svg" alt="htmx" />
                </div>
                <div className="marquee__inner" aria-hidden="true">
                  <img src="/assets/icons/ps.svg" alt="" />
                  <img src="/assets/icons/pr.svg" alt="" />
                  <img src="/assets/aftereffects.png" alt="" />
                  <img src="/assets/figma.svg" alt="" />
                  <img src="/assets/cards/card-img-blender.webp" alt="" />
                  <img src="/assets/icons/go.svg" alt="" />
                  <img src="/assets/icons/htmx.svg" alt="" />
                </div>
              </div>
            </div>

            <div className={`flex flex-col sm:flex-row ${gapRow} justify-center`}>
              <a href="/en/projects" className={primaryWrapClass}>
                <Button
                  name="View Projects"
                  variant="primary"
                  containerClass={`${btnSize} ${primaryMinWidth} w-full`}
                />
              </a>
              <a href="#contact" className={primaryWrapClass}>
                <Button
                  name="Contact Me"
                  variant="secondary"
                  containerClass={`${btnSize} ${primaryMinWidth} w-full`}
                />
              </a>
            </div>

            {/* Secondary rows — unified for EN too */}
            {(() => {
              const items = [
                { href: "#contact",    label: "Request a project",   variant: "primary" },
                { href: "/en/packages",label: "Services & Packages", variant: "secondary" },
                { href: "#contact",    label: "Book intro call",     variant: "secondary" },
              ];
              return (
                <div className="flex flex-col gap-3 sm:flex-row sm:gap-4 justify-center mt-6 w-full">
                  {items.map((it, i) => (
                    <a 
                      key={i} 
                      href={it.href} 
                      className="w-full sm:w-fit"
                      onClick={(e) => handleProjectRequest(e, it.href)}
                    >
                      <Button 
                        name={it.label} 
                        variant={it.variant} 
                        containerClass={`${btnSize} w-full sm:w-auto sm:min-w-[12rem]`}
                      />
                    </a>
                  ))}
                </div>
              );
            })()}

            {/* DropZone for English version */}
            <DropZone 
              isVisible={showDropZone}
              onFilesSelected={handleFilesSelected}
              maxFiles={10}
              maxFileSize={50 * 1024 * 1024} // 50MB
            />

            <div className="mt-6 flex flex-col items-center gap-3">
              <a
                href="#offer-grid"
                className={`text-white/70 border border-purple-950 mt-4 text-purple-800 rounded-full hover:text-white/90 text-sm ${btnSize}`}
              >
                See more ↓
              </a>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
