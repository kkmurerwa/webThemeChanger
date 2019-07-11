var div = document.getElementById("dom-target");
var currentTheme = parseInt(div.textContent);
toggleTheme();
document.addEventListener("DOMContentLoaded", toggleTheme);


function toggleTheme() {
    if (currentTheme == 0) {
        document.body.style.background = "var(--background-color-dark-mode)";
        document.body.style.color = "var(--main-color-dark-mode)";
        document.getElementById("toggle-theme").style.background = "gray"
        document.getElementById("toggle-theme").style.color = "var(--main-color-dark-mode)"
        document.getElementById("placeholder-text").innerHTML = "I am dark theme.";
        currentTheme = 1;
    } else if (currentTheme == 1) {
        document.body.style.background = "var(--background-color)";
        document.body.style.color = "var(--main-color)";
        document.getElementById("placeholder-text").innerHTML = "I am light theme.";
        document.getElementById("toggle-theme").style.background = "silver"
        document.getElementById("toggle-theme").style.color = "var(--main-color)"
        currentTheme = 0;
    }
}