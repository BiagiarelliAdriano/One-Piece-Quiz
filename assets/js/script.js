document.getElementById("play-button").addEventListener("click", function() {
    document.querySelector(".main-area").style.display = "none";
    document.getElementById("quiz-selection").classList.remove("hidden");
}) ;

document.getElementById("back-button").addEventListener("click", function() {
    document.getElementById("quiz-selection").classList.add("hidden");
    document.querySelector(".main-area").style.display = "flex";
}) ;

document.getElementById("characters-quiz").addEventListener("click", function() {
    document.getElementById("quiz-selection").classList.add("hidden");
    document.getElementById("characters-section").classList.remove("hidden");
}) ;