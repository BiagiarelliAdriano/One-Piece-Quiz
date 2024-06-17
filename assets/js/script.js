// Make sure the script runs after all the elements in the HTML code is loaded
document.addEventListener("DOMContentLoaded", function() {
    // Constants
    const charactersButton = document.querySelector(".quiz-buttons[value='Characters']");
    const characterSection = document.getElementById("characters-section");
    const characterImage = document.getElementById("character");
    const submitAnswer = document.querySelector(".answer");
    const scoreElement = document.querySelector(".score");
    const incorrectElement = document.querySelector(".incorrect");

    // Characters array
    const characters = [
        { src: "assets/images/characters/Silhouette/ace.png", name: "ace"},
        { src: "assets/images/characters/Silhouette/brook.png", name: "brook"},
        { src: "assets/images/characters/Silhouette/chopper.png", name: "chopper"},
        { src: "assets/images/characters/Silhouette/franky.png", name: "franky"},
        { src: "assets/images/characters/Silhouette/jimbei.png", name: "jimbei"},
        { src: "assets/images/characters/Silhouette/monkeydluffy.png", name: "luffy"},
        { src: "assets/images/characters/Silhouette/nami.png", name: "nami"},
        { src: "assets/images/characters/Silhouette/nicorobin.png", name: "nicorobin"},
        { src: "assets/images/characters/Silhouette/roronoazoro.png", name: "zoro"},
        { src: "assets/images/characters/Silhouette/sanji.png", name: "sanji"},
        { src: "assets/images/characters/Silhouette/shanks.png", name: "shanks"},
        { src: "assets/images/characters/Silhouette/usopp.png", name: "usopp"}
    ];

    let currentCharacter;

    document.getElementById("play-button").addEventListener("click", function() {
        document.querySelector(".main-area").style.display = "none";
        document.getElementById("quiz-selection").classList.remove("hidden");
    }) ;

    document.getElementById("back-button").addEventListener("click", function() {
        document.getElementById("quiz-selection").classList.add("hidden");
        document.querySelector(".main-area").style.display = "flex";
    }) ;

    charactersButton.addEventListener("click", function() {
        document.getElementById("quiz-selection").classList.add("hidden");
        characterSection.classList.remove("hidden");

        // Select a random character
        const randomIndex = Math.floor(Math.random() * characters.length);
        currentCharacter = characters[randomIndex];

        // Set the character image
        characterImage.src = currentCharacter.src;
    });

    submitAnswer.addEventListener("click", function() {
        const userAnswer = document.getElementById("quizInput").value.toLowerCase();

        if (userAnswer === currentCharacter.name) {
            scoreElement.textContent = parseInt(scoreElement.textContent) + 1;
        } else {
            incorrectElement.textContent = parseInt(incorrectElement.textContent) + 1;
        }

        // Clear the input field
        document.getElementById("quizInput").value = "";
    });
});
