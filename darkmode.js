let darkmode = localStorage.getItem('darkmode'); 
const themeSwitch = document.getElementById('theme-switch');

// Function to enable dark mode
const enableDarkmode = () => {
    document.body.classList.add('darkmode');
    localStorage.setItem('darkmode', 'active');
};

// Function to disable dark mode
const disableDarkmode = () => {
    document.body.classList.remove('darkmode');
    localStorage.setItem('darkmode', 'null');
};

// Check system preference for dark mode
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

// If no manual selection has been made, use system preferences
if (!darkmode) {
    if (prefersDarkScheme.matches) {
        enableDarkmode();
    } else {
        disableDarkmode();
    }
} else if (darkmode === "active") {
    enableDarkmode();
}

// Event listener for manual theme switching
themeSwitch.addEventListener("click", () => {
    darkmode = localStorage.getItem('darkmode');
    darkmode !== "active" ? enableDarkmode() : disableDarkmode();
});