const hsr = document.querySelector(".HSR");
const lor = document.querySelector(".LOR");
const fate = document.querySelector(".FATE");



document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".double").style.display = "none";
    document.querySelector(".library").style.display = "none";
    document.querySelector(".FGO").style.display = "none";
});

hsr.addEventListener("click", () => {
    document.querySelector(".double").style.display = "flex";
    document.querySelector(".library").style.display = "none";
    document.querySelector(".FGO").style.display="none";


});
lor.addEventListener("click", () => {
    document.querySelector(".double").style.display = "none";
    document.querySelector(".library").style.display = "flex";
    document.querySelector(".FGO").style.display="none";
});

fate.addEventListener("click", () => {
    document.querySelector(".double").style.display = "none";
    document.querySelector(".library").style.display = "none";
    document.querySelector(".FGO").style.display="flex";

});
