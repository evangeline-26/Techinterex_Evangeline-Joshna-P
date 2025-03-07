// Smooth Scrolling for Navigation Links
document.querySelectorAll("nav ul li a").forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        window.location.href = this.getAttribute("href");
    });
});

// Dark Mode Toggle
const darkModeToggle = document.createElement("button");
darkModeToggle.innerText = "Dark Mode";
darkModeToggle.classList.add("dark-mode-btn"); // Class for styling
document.body.appendChild(darkModeToggle);

darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

// Home Page Animation (Only on intern.html)
if (window.location.pathname.includes("intern.html")) {
    const homeSection = document.getElementById("home");
    if (homeSection) {
        homeSection.innerHTML += `
            <video autoplay loop muted style="width:100%; height:auto;">
                <source src="https://freefrontend.com/assets/img/css-animated-backgrounds/2024-foil-stamping-effect.mp4" type="video/mp4">
            </video>
        `;
    }
}
