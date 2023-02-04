const mainContent = document.querySelector(".main-content");

window.addEventListener("DOMContentLoaded", () => {
    if(mainContent.classList.contains("hide")) {
        mainContent.style.top = "0";
    } else {
        mainContent.style.top = "100%";
    }
});