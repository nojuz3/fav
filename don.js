const char = document.querySelector(".char");
const hub = document.querySelector(".hub");
const img = document.querySelector(".Don-img");
const img2 = document.querySelector(".d2img");


const images = ["https://i.pinimg.com/736x/bd/67/b6/bd67b69649c75ddb37a80f2b8d97c1f4.jpg", "https://i.pinimg.com/736x/e9/5d/70/e95d7081f2f9dc33f26a290876dc263c.jpg","https://i.pinimg.com/736x/8f/9a/58/8f9a58e7a0d88f1085ba78fda9113938.jpg"];
const images2 = ["https://limbuscompany.wiki.gg/images/c/c5/T_Corp._Class_3_Collection_Staff_Don_Quixote_Full.png","https://limbuscompany.wiki.gg/images/c/c0/Cinq_Assoc._East_Section_3_Don_Quixote_Full_Uptied.png","https://limbuscompany.wiki.gg/images/f/f1/The_Manager_of_La_Manchaland_Don_Quixote_Full_Uptied.png"]

let currentIndex = 0;

function cycleImages() {
  currentIndex = (currentIndex + 1) % images.length;
  document.querySelector(".Don-img").src = images[currentIndex];
}

function cycleImages2() {
  currentIndex = (currentIndex + 1) % images2.length;
  document.querySelector(".d2img").src = images2[currentIndex];
}


setInterval(cycleImages, 3000);
setInterval(cycleImages2, 3000);






document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".bio").style.display = "none";
    document.querySelector(".fearbox").style.display = "none";
    document.querySelector(".fear2").style.display = "none";
});



char.addEventListener("click", () => {
    document.querySelector(".bio").style.display = "flex";
    document.querySelector(".fearbox").style.display = "flex";
    document.querySelector(".fear2").style.display = "flex";
    document.querySelector(".d1").style.display = "none";
    document.querySelector(".d2").style.display = "none";
    document.querySelector(".d3").style.display = "none";
    document.querySelector(".d4").style.display = "none";
    document.querySelector(".no").style.display = "none";
});
hub.addEventListener("click", () => {
    document.querySelector(".bio").style.display = "none";
    document.querySelector(".fearbox").style.display = "none";
    document.querySelector(".fear2").style.display = "none";
    document.querySelector(".d1").style.display = "flex";
    document.querySelector(".d2").style.display = "flex";
    document.querySelector(".d3").style.display = "flex";
    document.querySelector(".d4").style.display = "flex";
    document.querySelector(".no").style.display = "flex";
});
