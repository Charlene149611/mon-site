function saveTheme (theme) {
    document.body.className = theme ;
    localStorage.setItem ('theme', theme)
}

export function createThemeToggle() {
    const bouton = document.createElement('button')
    let darkMode = localStorage.getItem('theme') === "dark";
    saveTheme(darkMode ? "light" : "dark")
    bouton.innerText= darkMode ? "🌞" : "🌙";
    bouton.classList.add('darklight.btn')

    bouton.addEventListener('click', () => {
        darkMode = !darkMode;
        saveTheme(darkMode ? "light" : "dark")
        bouton.innerText= darkMode ? "🌞" : "🌙";

    })
    return bouton;
}

windows.onload = () => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    saveTheme(savedTheme)
}

