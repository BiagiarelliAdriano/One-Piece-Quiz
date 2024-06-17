// Make sure the script runs after all the elements in the HTML code is loaded
document.addEventListener("DOMContentLoaded", function() {
    // Constants
    const charactersButton = document.querySelector(".quiz-buttons[value='Characters']");
    const characterSection = document.getElementById("characters-section");
    const characterImage = document.getElementById("character");
    const characterAnswerImage = document.getElementById("character-answer");
    const submitAnswer = document.querySelector(".answer");
    const scoreElement = document.querySelector(".score");
    const incorrectElement = document.querySelector(".incorrect");

    // Characters silhouette array
    const characters = [
        { src: "assets/images/characters/silhouette/ace.png", name: "ace"},
        { src: "assets/images/characters/silhouette/brook.png", name: "brook"},
        { src: "assets/images/characters/silhouette/chopper.png", name: "chopper"},
        { src: "assets/images/characters/silhouette/franky.png", name: "franky"},
        { src: "assets/images/characters/silhouette/jimbei.png", name: "jimbei"},
        { src: "assets/images/characters/silhouette/monkeydluffy.png", name: "luffy"},
        { src: "assets/images/characters/silhouette/nami.png", name: "nami"},
        { src: "assets/images/characters/silhouette/nicorobin.png", name: "nicorobin"},
        { src: "assets/images/characters/silhouette/roronoazoro.png", name: "zoro"},
        { src: "assets/images/characters/silhouette/sanji.png", name: "sanji"},
        { src: "assets/images/characters/silhouette/shanks.png", name: "shanks"},
        { src: "assets/images/characters/silhouette/usopp.png", name: "usopp"}
    ];

    // Characters answer array, colored versions
    const characterAnswers = [
        { src: "assets/images/characters/colored/ace.png", name: "ace"},
        { src: "assets/images/characters/colored/brook.png", name: "brook"},
        { src: "assets/images/characters/colored/chopper.png", name: "chopper"},
        { src: "assets/images/characters/colored/franky.png", name: "franky"},
        { src: "assets/images/characters/colored/jimbei.png", name: "jimbei"},
        { src: "assets/images/characters/colored/monkeydluffy.png", name: "luffy"},
        { src: "assets/images/characters/colored/nami.png", name: "nami"},
        { src: "assets/images/characters/colored/nicorobin.png", name: "robin"},
        { src: "assets/images/characters/colored/roronoazoro.png", name: "zoro"},
        { src: "assets/images/characters/colored/sanji.png", name: "sanji"},
        { src: "assets/images/characters/colored/shanks.png", name: "shanks"},
        { src: "assets/images/characters/colored/usopp.png", name: "usopp"},
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
            // Increment score
            scoreElement.textContent = parseInt(scoreElement.textContent) + 1;

            // Show colored character image
            characterImage.classList.add("hidden");
            characterAnswerImage.src = characterAnswers.find(c => c.name === currentCharacter.name).src;
            characterAnswerImage.classList.remove("hidden");

            // Delay for 2 seconds and then continue quiz
            setTimeout(function() {
                characterImage.classList.remove("hidden");
                characterAnswerImage.classList.add("hidden");

                //Select a new random character
                const newIndex = Math.floor(Math.random() * characters.length);
                currentCharacter = characters[newIndex];
                characterImage.src = currentCharacter.src;
            }, 2000);
        } else {
            // Increment incorrect score
            incorrectElement.textContent = parseInt(incorrectElement.textContent) + 1;

            // Show colored character image
            characterImage.classList.add("hidden");
            characterAnswerImage.src = characterAnswers.find(c => c.name === currentCharacter.name).src;
            characterAnswerImage.classList.remove("hidden");

            // Delay for 2 seconds and then continue quiz
            setTimeout(function() {
                characterImage.classList.remove("hidden");
                characterAnswerImage.classList.add("hidden");

                //Select a new random character
                const newIndex = Math.floor(Math.random() * characters.length);
                currentCharacter = characters[newIndex];
                characterImage.src = currentCharacter.src;
            }, 2000);
        }

        // Clear the input field
        document.getElementById("quizInput").value = "";
    });
});
