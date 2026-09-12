var projects = [
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

var projectGrid = document.getElementById("projectGrid");

projects.forEach(function(project, index) {
    var githubUrl = "https://github.com/umarBinRiaz/" + project.repo;
    var liveUrl = "https://umarbinriaz.github.io/" + project.repo + "/";

    var card = document.createElement("article");
    card.className = "project-card";

    var techHtml = "";
    project.tech.forEach(function(item) {
        techHtml += "<span>" + item + "</span>";
    });

    card.innerHTML =
        '<div>' +
            '<div class="project-number">0' + (index + 1) + ' / PROJECT</div>' +
            '<h3>' + project.name + '</h3>' +
            '<p>' + project.description + '</p>' +
        '</div>' +
        '<div class="project-meta">' +
            '<div class="tech">' + techHtml + '</div>' +
            '<div class="project-links">' +
                '<a href="' + githubUrl + '" target="_blank" rel="noopener">GitHub ↗</a>' +
                '<a href="' + liveUrl + '" target="_blank" rel="noopener">Live ↗</a>' +
            '</div>' +
        '</div>';

    projectGrid.appendChild(card);
});

document.getElementById("year").textContent = new Date().getFullYear();

document.addEventListener("mousemove", function(event) {
    var glow = document.querySelector(".cursor-glow");
    glow.style.left = event.clientX + "px";
    glow.style.top = event.clientY + "px";
});
