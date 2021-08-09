
// scrolling down page events
window.addEventListener("scroll", () => {

    // check if not at top of page to convert 
    // nav background from transparent to solid
    if (window.pageYOffset <= 0) {
        document.querySelector("#nav-container").style.backgroundColor = "transparent";
    }
    else {
        document.querySelector("#nav-container").style.backgroundColor = "var(--color-secondary-light)";
    }

    // check if scrolled past header section to display
    // bottom right resume button
    if (window.pageYOffset > window.innerHeight - 330) {
        
        // check to see if style has already been applied.. if so, don't execute
        if (document.querySelector("#resume-bottom-button").style.bottom != "4vw") {

            document.querySelector("#resume-bottom-button").style.transition = "bottom 0.5s ease-in-out";
            document.querySelector("#resume-bottom-button").style.bottom = "4vw";
            document.querySelector("#resume-bottom-button").style.right = "4vw";
        }
    }
    else {

        if (document.querySelector("#resume-bottom-button").style.right != "-90px") {

            document.querySelector("#resume-bottom-button").style.transition = "right 0.5s ease-in-out";
            document.querySelector("#resume-bottom-button").style.right = "-90px";
            setTimeout( () => {
                document.querySelector("#resume-bottom-button").style.bottom = "-90px";
            }, 500);
        }
    }
});