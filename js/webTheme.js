let currentTheme = 0;



function toggleTheme() {

    if (currentTheme == 0) {
        document.body.style.background = "var(--background-color-dark-mode)";
        document.body.style.color = "var(--main-color-dark-mode)";
        document.getElementById("placeholder-text").innerHTML = "I am dark theme.";
        currentTheme = 1;
    } else {
        document.body.style.background = "var(--background-color)";
        document.body.style.color = "var(--main-color)";
        document.getElementById("placeholder-text").innerHTML = "I am light theme.";
        currentTheme = 0;
    }
}