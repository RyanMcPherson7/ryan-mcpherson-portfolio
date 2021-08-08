
// when scroll down, convert nav background from transparent to solid
window.addEventListener("scroll", () => {
    // if at top of page
    if (window.pageYOffset == 0) {
        document.querySelector("#nav-container").style.backgroundColor = "transparent";
    }
    else {
        document.querySelector("#nav-container").style.backgroundColor = "var(--color-secondary-light)";
    }
});