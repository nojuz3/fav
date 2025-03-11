const char = document.querySelector(".char");
const hub = document.querySelector(".hub");

const images = ["https://limbuscompany.wiki.gg/images/f/f3/Full-Stop_Office_Fixer_Heathcliff_Full_Uptied.png", "https://limbuscompany.wiki.gg/images/b/b0/Wild_Hunt_Heathcliff_Full_Uptied.png","https://limbuscompany.wiki.gg/images/8/8c/Kurokumo_Clan_Wakashu_Heathcliff_Full_Uptied.png"];
const images2 = ["https://limbuscompany.wiki.gg/images/e/e8/Wild_Hunt_Heathcliff_Idle_Animation.gif","https://limbuscompany.wiki.gg/images/b/ba/LCB_Sinner_Heathcliff_Idle_Animation.gif","https://limbuscompany.wiki.gg/images/d/d8/Kurokumo_Clan_Wakashu_Heathcliff_Idle_Animation.gif"]

let currentIndex = 0;
function cycleImages() {
  currentIndex = (currentIndex + 1) % images.length;
  document.querySelector(".H-img2").src = images[currentIndex];
}
function cycleImages2() {
    currentIndex = (currentIndex + 1) % images2.length;
    document.querySelector(".H-img").src = images2[currentIndex];
  }
setInterval(cycleImages, 3000);
setInterval(cycleImages2, 3000);





document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".H-bio").style.display = "none";
    document.querySelector(".H-i").style.display = "none";
});



char.addEventListener("click", () => {
    document.querySelector(".H-bio").style.display = "flex";
    document.querySelector(".H-i").style.display = "flex";
    document.querySelector(".H-cardBox").style.display="none";
    document.querySelector(".H-cards").style.display="none";
    document.querySelector(".Heath-cards").style.display="none";

});
hub.addEventListener("click", () => {
    document.querySelector(".H-bio").style.display = "none";
    document.querySelector(".H-i").style.display = "none";
    document.querySelector(".Heath-cards").style.display="flex";
    document.querySelector(".H-cardBox").style.display="flex";
    document.querySelector(".H-cards").style.display="flex";
});

