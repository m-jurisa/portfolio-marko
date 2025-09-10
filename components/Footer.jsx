const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        <p>
          <a href="mailto:info@portfolio-marko.com" className="hover:underline">
            info@portfolio-marko.com
          </a>
        </p>
      </div>

      <div className="flex gap-3">
        <div className="social-icon">
          <a
            href="https://github.com/m-jurisa"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub – m-jurisa"
          >
            <img src="/assets/github.svg" alt="GitHub" className="w-8 h-8" />
          </a>
        </div>
      </div>

      <p className="text-white-500">© {year} Marko Jurisa. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
