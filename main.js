(() => {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  const emailTextEl = document.getElementById("emailText");
  const copyBtn = document.querySelector("[data-copy-email]");
  if (copyBtn && emailTextEl) {
    copyBtn.addEventListener("click", async () => {
      const email = emailTextEl.textContent?.trim() ?? "";
      if (!email) return;

      try {
        await navigator.clipboard.writeText(email);
        const prev = copyBtn.textContent;
        copyBtn.textContent = "Copied";
        window.setTimeout(() => {
          copyBtn.textContent = prev;
        }, 1000);
      } catch {
        // Clipboard permissions can vary; silently no-op.
      }
    });
  }

  const links = Array.from(document.querySelectorAll(".site-nav a"))
    .map((a) => {
      const href = a.getAttribute("href") ?? "";
      if (!href.startsWith("#")) return null;
      const id = href.slice(1);
      const section = document.getElementById(id);
      if (!section) return null;
      return { a, section };
    })
    .filter(Boolean);

  if (!links.length) return;

  const obs = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (!e.isIntersecting) continue;
        for (const { a, section } of links) {
          a.setAttribute(
            "aria-current",
            section === e.target ? "page" : "false",
          );
        }
      }
    },
    { rootMargin: "-35% 0px -55% 0px", threshold: 0.01 },
  );

  for (const { section } of links) obs.observe(section);
})();
