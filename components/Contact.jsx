"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import useAlert from "../hooks/useAlert";
import Alert from "./Alert";

/* Valid modes */
const VALID = ["vollzeit", "freiberuflich"];

/* Parse initial mode from URL only (SSR-safe) */
function parseModeFromUrl(pathname, searchParams) {
  const p = (pathname || "").toLowerCase();
  if (p.includes("/vollzeit")) return "vollzeit";
  if (p.includes("/freiberuflich")) return "freiberuflich";

  const qp = searchParams?.get?.("modus");
  if (VALID.includes(qp)) return qp;

  return "freiberuflich"; // stable SSR default
}

/* Whether URL explicitly dictates the mode */
function urlHasExplicitMode(pathname, searchParams) {
  const p = (pathname || "").toLowerCase();
  if (p.includes("/vollzeit") || p.includes("/freiberuflich")) return true;
  const qp = searchParams?.get?.("modus");
  return VALID.includes(qp);
}

const Contact = () => {
  const formRef = useRef();
  const { alert, showAlert, hideAlert } = useAlert();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const pathname = usePathname();
  const searchParams = useSearchParams();

  /* IMPORTANT: initial state derived from URL only → no hydration mismatch */
  const [mode, setMode] = useState(() =>
    parseModeFromUrl(pathname, searchParams)
  );

  /* Keep mode in sync with navigation changes */
  useEffect(() => {
    setMode(parseModeFromUrl(pathname, searchParams));
  }, [pathname, searchParams]);

  /* LocalStorage mode handling */
  useEffect(() => {
    const explicit = urlHasExplicitMode(pathname, searchParams);
    if (!explicit && typeof window !== "undefined") {
      const stored = localStorage.getItem("modus-de");
      if (VALID.includes(stored)) setMode(stored);
    }

    function onStorage(e) {
      if (!explicit && e.key === "modus-de" && VALID.includes(e.newValue)) {
        setMode(e.newValue);
      }
    }
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, [pathname, searchParams]);

  const handleChange = ({ target: { name, value } }) =>
    setForm({ ...form, [name]: value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("https://contact.portfolio-marko.com/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          modus: mode, // 
        }),
      });

      if (res.ok) {
        setLoading(false);
        showAlert({
          show: true,
          text: "Danke für deine Nachricht",
          type: "success",
        });
        setTimeout(() => {
          hideAlert();
          setForm({ name: "", email: "", message: "" });
        }, 3000);
      } else {
        throw new Error("Server returned error");
      }
    } catch (error) {
      console.error(error);
      setLoading(false);
      showAlert({
        show: true,
        text: "Ich habe deine Nachricht leider nicht erhalten",
        type: "danger",
      });
    }
  };

  const introCopy =
    mode === "vollzeit"
      ? "Sie suchen eine Verstärkung in Festanstellung? Ich fokussiere robuste Frontends (React/Next.js), UI-Integration und Junior Full-Stack (Node/Go). Schreiben Sie mir kurz Rolle, Team-Setup und Starttermin."
      : "Projektbasiert: schnelle, kosteneffiziente Web-Lösungen (Next.js, Go+htmx) sowie Video Editing & Motion Graphics. Bitte Ziel, Timing und Scope nennen – ich melde mich zeitnah.";

  return (
<section className="px-2 sm:px-10 my-0 mb-16 sm:my-20" id="contact">
        {alert.show && <Alert {...alert} />}
      <div className="relative min-h-screen flex items-center justify-center flex-col">
        <img
          src="/assets/terminal.webp"
          alt="terminal-bg"
          className="absolute inset-0 min-h-screen"
        />
        <div className="contact-container  text-white-600 ">
          <h3 className="sm:text-4xl text-3xl font-semibold mt-16 md:mt-0">
            Lass uns sprechen
          </h3>

          <p className="text-lg mt-3">{introCopy}</p>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col space-y-7"
          >
            <label className="space-y-3">
              <span className="field-label">Vollständiger Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="z. B. John Doe"
              />
            </label>
            <label className="space-y-3">
              <span className="field-label">E-Mail-Adresse</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="z. B. johndoe@gmail.com"
              />
            </label>
            <label className="space-y-3">
              <span className="field-label">Deine Nachricht</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="field-input"
                placeholder="Teile deine Gedanken oder Anfragen…"
              />
            </label>
            <button className="field-btn" type="submit" disabled={loading}>
              {loading ? "Senden..." : "Nachricht senden"}
              <img
                src="/assets/arrow-up.png"
                alt="arrow-up"
                className="field-btn_arrow"
              />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
