const buttonDarkMode = document.querySelector(".darkModeButton");

if(localStorage.getItem('darkMode') == 'dark'){
    buttonDarkMode.classList.add('darkModeButton--active');
    document.body.classList.add('dark');
}

buttonDarkMode.onclick = function() {
    buttonDarkMode.classList.toggle('darkModeButton--active');
    const isDark = document.body.classList.toggle('dark');

    if (isDark) {
        localStorage.setItem('darkMode', 'dark')
    } else {
        localStorage.setItem('darkMode', 'light')
    }
}