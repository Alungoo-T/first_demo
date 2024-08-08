function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");

  console.log("daragdaj baina");
}

// const hamMenu = document.querySelector(".ham-menu");
// const offScreenMenu = document.querySelector(".off-screen-menu");

// hamMenu.addEventListener("click",()=> {
//     hamMenu.classList.toggle ("active");
//     offScreenMenu.classList.toggle("active");
// });

function show() {
  document.querySelector(".hamburger").classList.toggle("open");
  document.querySelector(".ham-menu").classList.toggle("active");
}

let slideIndex = 0;
showSlides();

function showSlides() {
  console.log("showSlides working");
  let slides = document.getElementsByClassName("slides");
  let dots = document.getElementsByClassName("dot");

  let i = 0;
  while (i < slides.length) {
    slides[i].style.display = "none";
    i++;
  }

  // Increment the slide index
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  // Reset the dots
  i = 0;
  while (i < dots.length) {
    dots[i].className = dots[i].className.replace(" active", "");
    i++;
  }

  // Show the current slide and activate the corresponding dot
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

setInterval(showSlides, 3000);
