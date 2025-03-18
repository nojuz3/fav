const img = document.querySelector(".I-img2");
const char = document.querySelector(".char");
const hub = document.querySelector(".hub");
const images = ["img/ish1.gif", "img/ish2.png"];


let currentIndex = 0;
function cycleImages() {
  currentIndex = (currentIndex + 1) % images.length;
  document.querySelector(".I-img2").src = images[currentIndex];
}
setInterval(cycleImages, 3000);




document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".i2").style.display = "none";
  document.querySelector(".fear").style.display = "none";
});

char.addEventListener("click", () => {
    document.querySelector(".i2").style.display = "flex";
    document.querySelector(".fear").style.display = "flex";
    document.querySelector(".is1").style.display = "none";
    document.querySelector(".is3").style.display = "none";
    document.querySelector(".is3-1").style.display = "none";
});
hub.addEventListener("click", () => {
    document.querySelector(".i2").style.display = "none";
    document.querySelector(".fear").style.display = "none";
    document.querySelector(".is1").style.display = "flex";
    document.querySelector(".is3").style.display = "flex";
    document.querySelector(".is3-1").style.display = "flex";
});

