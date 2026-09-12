// Project Data
const projects = [
    {
        name: "Playtifiy",
        repo: "Playtifiy",
        description: "A personal music player built for a smooth listening experience, with playlists, playback controls and a modern app-style interface.",
        tech: ["JavaScript", "HTML", "CSS"]
    },
    {
        name: "Deen-Point",
        repo: "Deen-Point",
        description: "An Islamic knowledge platform featuring Quran, Hadith, Duas, articles and a simple user-friendly reading experience.",
        tech: ["HTML", "CSS", "JavaScript"]
    },
    {
        name: "E-COM",
        repo: "E-COM",
        description: "A complete e-commerce experience with products, cart, checkout flow, admin features and responsive design.",
        tech: ["HTML", "JavaScript", "Bootstrap"]
    },
    {
        name: "UmarRoyale",
        repo: "UmarRoyale",
        description: "A premium fragrance website concept focused on elegant presentation, product storytelling and luxury visual design.",
        tech: ["HTML", "CSS", "JavaScript"]
    },
    {
        name: "K-TOWN-FRYER-KING",
        repo: "K-TOWN-FRYER-KING",
        description: "A responsive restaurant website concept with an interactive menu, modern presentation and direct customer contact flow.",
        tech: ["HTML", "CSS"]
    }
];

// Contact Details
const contactLinks = {
    whatsapp: "https://wa.me/923092230740",
    linkedin: "https://www.linkedin.com/in/umar-bin-riaz-4230b93a3/",
    github: "https://github.com/umarBinRiaz",
    email: "umar.bin.riaz99@gmail.com"
};

const projectGrid = document.getElementById("projectGrid");

// Render Project Cards dynamically using Modern Template Literals
if (projectGrid) {
    projects.forEach((project, index) => {
        const githubUrl = `${contactLinks.github}/${project.repo}`;
        const liveUrl = `https://umarbinriaz.github.io/${project.repo}/`;

        const card = document.createElement("article");
        card.className = "project-card";

        const techHtml = project.tech
            .map(item => `<span>${item}</span>`)
            .join("");

        const projectNum = String(index + 1).padStart(2, "0");

        card.innerHTML = `
            <div>
                <div class="project-number">${projectNum} / PROJECT</div>
                <h3>${project.name}</h3>
                <p>${project.description}</p>
            </div>
            <div class="project-meta">
                <div class="tech">${techHtml}</div>
                <div class="project-links">
                    <a href="${githubUrl}" target="_blank" rel="noopener noreferrer">GitHub <span aria-hidden="true">↗</span></a>
                    <a href="${liveUrl}" target="_blank" rel="noopener noreferrer">Live <span aria-hidden="true">↗</span></a>
                </div>
            </div>
        `;

        projectGrid.appendChild(card);
    });
}

// Update Footer Year Dynamically
const yearEl = document.getElementById("year");
if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
}

// High-Performance Cursor Glow Effect (using requestAnimationFrame to eliminate lag)
const glow = document.querySelector(".cursor-glow");
if (glow) {
    let mouseX = 0;
    let mouseY = 0;
    let isTicking = false;

    window.addEventListener("mousemove", (event) => {
        mouseX = event.clientX;
        mouseY = event.clientY;

        if (!isTicking) {
            window.requestAnimationFrame(() => {
                glow.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
                isTicking = false;
            });
            isTicking = true;
        }
    });
}