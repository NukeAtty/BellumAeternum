function initLanguageSelector(context = document) {
  const supportedLangs = ["en", "zh", "ru"];
  const currentPath = window.location.pathname;
  const [, firstSegment, ...rest] = currentPath.split("/");
  const isLangPrefixed = supportedLangs.includes(firstSegment);
  const currentLang = isLangPrefixed ? firstSegment : "en";
  const restOfPath = isLangPrefixed ? rest.join("/") : currentPath.replace(/^\//, "");

  // Update hrefs + highlight current
  context.querySelectorAll(".language-option").forEach(link => {
    const lang = link.dataset.lang;
    let newPath;

    if (lang === "en") {
      newPath = `/${restOfPath}`;
    } else if (isLangPrefixed) {
      newPath = `/${lang}/${restOfPath}`;
    } else {
      newPath = `/${lang}${currentPath.startsWith("/") ? currentPath : "/" + currentPath}`;
    }

    newPath = newPath.replace(/\/\/+/g, "/").replace(/\/$/, "") || "/";
    link.href = newPath;

    // Reset any previous state
    link.classList.remove("current-lang");
    link.removeAttribute("aria-current");
    link.style.pointerEvents = "";

    // Disable current language link
    if (lang === currentLang) {
      link.classList.add("current-lang");
      link.setAttribute("aria-current", "true");
      link.style.pointerEvents = "none"; // not clickable
    }
  });

  // Update selected-language text
  const selected = context.querySelector(".selected-language");
  const active = context.querySelector(`.language-option[data-lang='${currentLang}']`);
  if (active && selected) {
    selected.textContent = active.textContent.trim();
  }

  // Dropdown toggle
  context.querySelectorAll(".language-selector").forEach(selector => {
    const selectedEl = selector.querySelector(".selected-language");
    const dropdown = selector.querySelector(".language-dropdown");

    selectedEl.addEventListener("click", e => {
      e.stopPropagation();
      dropdown.classList.toggle("active");
    });

    dropdown.querySelectorAll(".language-option").forEach(option => {
      option.addEventListener("click", () => {
        dropdown.classList.remove("active");
      });
    });
  });
}

// Initial run
document.addEventListener("DOMContentLoaded", () => {
  initLanguageSelector();
});

// Re-run after HTMX loads content
document.body.addEventListener("htmx:afterSwap", e => {
  initLanguageSelector(e.target);
});

// Close dropdown when clicking outside
document.addEventListener("click", () => {
  document.querySelectorAll(".language-dropdown.active").forEach(d => d.classList.remove("active"));
});
