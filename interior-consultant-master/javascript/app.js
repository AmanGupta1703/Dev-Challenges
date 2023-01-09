// selecting required dom elements  
const btnBars = document.querySelector(".btn-bars");
const btnCross = document.querySelector(".btn-cross");
const headerNav = document.querySelector(".header-nav");
const date = document.getElementById("date");

// date parameters
const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};

// event listeners
window.addEventListener("click", showNavigation);

// functions
function showNavigation(e) {
  if (e.target.classList.contains("fa-bars")) {
    headerNav.classList.add("show-header-nav");
    btnBars.style.display = "none";
    btnCross.classList.add("show-btn-cross");
  } else if (e.target.classList.contains("fa-xmark")) {
    headerNav.classList.remove("show-header-nav");
    btnBars.style.display = "block";
    btnCross.classList.remove("show-btn-cross");
  }
}

// setting the date
const currentDate = new Date();
const time = currentDate.toLocaleDateString('en', options);
date.textContent = time;
