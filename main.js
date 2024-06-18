const menu = document.getElementById("hamburger-menu");
const themeSwitch = document.getElementById("theme-switcher");

menu.addEventListener("click", function () {
    this.classList.toggle("active");
    document.querySelector(".mobile-menu").classList.toggle("active-menu");
});

themeSwitch.addEventListener("click", function () {
    const rootEle = document.documentElement;
    let dataTheme = rootEle.getAttribute("data-theme");
    const newTheme = dataTheme === "dark" ? "light" : "dark";
    rootEle.setAttribute("data-theme", newTheme);

    localStorage.setItem("theme", newTheme);
});
