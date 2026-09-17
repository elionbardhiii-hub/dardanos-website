// ===============================
// DARDANOS WEBSITE JAVASCRIPT
// ===============================


// Current year
document.getElementById("year").textContent = new Date().getFullYear();


// ===============================
// MOBILE MENU
// ===============================

const menuBtn = document.getElementById("menuBtn");
const nav = document.querySelector("nav");

menuBtn.addEventListener("click", () => {
    nav.classList.toggle("open");

    if (nav.classList.contains("open")) {
        menuBtn.textContent = "✕";
    } else {
        menuBtn.textContent = "☰";
    }
});


// Close mobile menu after clicking a link

document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("open");
        menuBtn.textContent = "☰";
    });
});


// ===============================
// LANGUAGE SWITCH
// SQ <-> EN
// ===============================

const languageBtn = document.getElementById("languageBtn");

let currentLanguage = "sq";

const translations = {
    sq: {
        heroTitle: "Një Linux i ri.<span>Për të gjithë.</span>",
        heroText:
            "DardanOS është një sistem operativ Linux i ndërtuar me fokus te thjeshtësia, komuniteti dhe inteligjenca artificiale."
    },

    en: {
        heroTitle: "A new Linux.<span>For everyone.</span>",
        heroText:
            "DardanOS is a Linux operating system built with a focus on simplicity, community and artificial intelligence."
    }
};


// Elements that contain SQ/EN text

const translatedElements =
    document.querySelectorAll("[data-sq][data-en]");

function updateLanguage() {

    currentLanguage = currentLanguage === "sq" ? "en" : "sq";

    translatedElements.forEach(element => {

        element.textContent =
            element.getAttribute(`data-${currentLanguage}`);

    });

    document.querySelector(".hero h1").innerHTML =
        translations[currentLanguage].heroTitle;

    document.getElementById("heroText").textContent =
        translations[currentLanguage].heroText;

    languageBtn.textContent =
        currentLanguage === "sq" ? "EN" : "SQ";

    document.documentElement.lang = currentLanguage;
}

languageBtn.addEventListener("click", updateLanguage);


// ===============================
// DOWNLOAD MESSAGE
// ===============================

function showDownloadMessage(event) {

    event.preventDefault();

    const toast = document.getElementById("toast");

    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 3500);
}


// ===============================
// SCROLL REVEAL ANIMATION
// ===============================

const revealElements = document.querySelectorAll(
    ".card, .roadmap-item, .ai-box, .download-box, .about-grid"
);

revealElements.forEach(element => {
    element.style.opacity = "0";
    element.style.transform = "translateY(25px)";
    element.style.transition = "opacity 0.7s ease, transform 0.7s ease";
});


const observer = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

                observer.unobserve(entry.target);
            }

        });

    },
    {
        threshold: 0.12
    }
);


revealElements.forEach(element => {
    observer.observe(element);
});


// ===============================
// ACTIVE NAVIGATION
// ===============================

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.style.color = "";

        if (link.getAttribute("href") === `#${current}`) {
            link.style.color = "#1683ff";
        }

    });

});


// ===============================
// DARDANAI DEMO
// ===============================

const chatInput = document.querySelector(".chat-input");
const chatButton = document.querySelector(".chat-input button");

chatButton.addEventListener("click", () => {

    const originalText = chatInput.querySelector("span");

    originalText.textContent =
        currentLanguage === "sq"
            ? "DardanAI është duke punuar..."
            : "DardanAI is working...";

    setTimeout(() => {

        originalText.textContent =
            currentLanguage === "sq"
                ? "DardanAI është gati 🤖"
                : "DardanAI is ready 🤖";

    }, 1500);

});


// ===============================
// CONSOLE MESSAGE
// ===============================

console.log(`
====================================
        DARDANOS
====================================

🇽🇰 Linux from Kosovo
🤖 DardanAI
🐧 Open Source

DardanOS 1.0 — Testing

====================================
`);
