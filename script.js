function changeLanguage(lang) {
    const elements = document.querySelectorAll('[data-lang-en]');
    elements.forEach(el => {
        const translated = el.getAttribute(`data-lang-${lang}`);
        if (translated) el.innerHTML = translated;
    });
}
