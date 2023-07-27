console.log("js is loaded");

var checkBox = document.querySelectorAll('input[type="checkbox"]');

// carousel
// football
var slidePositionFootball = 1;
SlideShowFootball(slidePositionFootball);
// hiking
var slidePositionHiking = 1;
SlideShowHiking(slidePositionHiking);
// running
var slidePositionRunning = 1;
SlideShowRunning(slidePositionRunning);

// photo array
const ball_path = "./assets/football/";
var football_photos = [
  "IMG_9301.JPG",
  "ACK_3323.JPG",
  "ACK_3324.JPG",
  "ACK_3398.JPG",
];

const hike_path = "./assets/hiking/";
var hiking_photos = ["1.jpg", "2.jpg", "3.jpg"];

const run_path = "./assets/running/";
var run_photos = ["1.jpg", "2.jpg", "3.JPG"];

////////// mobile nav button /////////////////

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);

/////////////////////////////////////////////////

// carousel reuse for now

// football

// forward/Back controls
function plusSlidesFootball(n) {
  SlideShowFootball((slidePositionFootball += n));
}
function plusSlidesHiking(n) {
  SlideShowHiking((slidePositionHiking += n));
}
function plusSlidesRunning(n) {
  SlideShowRunning((slidePositionRunning += n));
}

function SlideShowFootball(n) {
  let i;
  let slides = document.getElementsByClassName("photos");
  if (n > slides.length) {
    slidePositionFootball = 1;
  }
  if (n < 1) {
    slidePositionFootball = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slidePositionFootball - 1].style.display = "flex";
}

function SlideShowHiking(n) {
  let i;
  let slides = document.getElementsByClassName("hike-photos");
  if (n > slides.length) {
    slidePositionHiking = 1;
  }
  if (n < 1) {
    slidePositionHiking = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slidePositionHiking - 1].style.display = "flex";
}

function SlideShowRunning(n) {
  let i;
  let slides = document.getElementsByClassName("run-photos");
  if (n > slides.length) {
    slidePositionRunning = 1;
  }
  if (n < 1) {
    slidePositionRunning = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slidePositionRunning - 1].style.display = "flex";
}
