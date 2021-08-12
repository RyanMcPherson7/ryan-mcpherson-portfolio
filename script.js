const navContainer = document.querySelector("#nav-container");
const resumeBottomButton = document.querySelector("#resume-bottom-button");

// scrolling down page events
window.addEventListener("scroll", () => {

    // check if not at top of page to convert nav background from transparent to solid
    if (window.pageYOffset <= 0) {
        navContainer.style.backgroundColor = "transparent";
    }
    else {
        navContainer.style.backgroundColor = "var(--color-secondary-light)";
    }

    // check if scrolled past header section to display bottom right resume button
    if (window.pageYOffset > window.innerHeight - 330) {

        // check to see if style has already been applied.. if so, don't execute
        if (resumeBottomButton.style.bottom != "4vw") {

            resumeBottomButton.style.transition = "bottom 0.5s ease-in-out";
            resumeBottomButton.style.bottom = "4vw";
            resumeBottomButton.style.right = "4vw";
        }
    }
    else {

        if (resumeBottomButton.style.right != "-90px") {

            resumeBottomButton.style.transition = "right 0.5s ease-in-out";
            resumeBottomButton.style.right = "-90px";
            // added 500ms delay for animation to work properly
            setTimeout( () => {
                resumeBottomButton.style.bottom = "-90px";
            }, 500);
        }
    }
});

// focusing and unfocusing on input areas triggers underline effect
const inputUnderlineList = document.querySelectorAll(".inputUnderlineEffect");
const inputList = document.querySelectorAll(".form-input");  // targets non-hidden input

// events for text input
for (let i = 0; i < inputList.length; i++) {

    inputList[i].addEventListener("focus", () => {
        inputUnderlineList[i].style.transform = "scaleX(1)";
    });

    inputList[i].addEventListener("blur", () => {
        inputUnderlineList[i].style.transform = "scaleX(0)";
    })
}

// clicking the submit button sends the user a message 
const contactSubmitButton = document.querySelector("#contact-submit-button");

contactSubmitButton.addEventListener("click", () => {

    // checking to see if all input has been entered
    for (let i = 0; i < inputList.length; i++) 
        if (!inputList[i].value) 
            return;
        
    alert("Your message has been sent!");
});

// when the page is loaded, if not in mobile view, add aos animations
// const projectSectionTitle = document.querySelector("#project-section-title");
// const projectList = document.querySelectorAll(".project");

// window.addEventListener("load", () => {
//     if (window.innerWidth > 700) {

//         projectSectionTitle.setAttribute("data-aos", "fade-right");
//         // projectSectionTitle.setAttribute("data-aos-duration", "1000");
//         projectSectionTitle.setAttribute("data-aos-mirror", "false");


//     }
// });