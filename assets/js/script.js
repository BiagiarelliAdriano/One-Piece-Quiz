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
    const saveBackButton = document.getElementById("save-back-button");

    // Characters silhouette array
    const characters = [
        { src: "assets/images/characters/silhouette/ace.png", names: ["ace", "portgas d ace", "portgas"]},
        { src: "assets/images/characters/silhouette/brook.png", names: ["brook"]},
        { src: "assets/images/characters/silhouette/chopper.png", names: ["chopper", "tony tony chopper"]},
        { src: "assets/images/characters/silhouette/franky.png", names: ["franky", "cutty flam"]},
        { src: "assets/images/characters/silhouette/jimbei.png", names: ["jimbei", "jinbei", "jinbe"]},
        { src: "assets/images/characters/silhouette/monkeydluffy.png", names: ["luffy", "monkey d luffy"]},
        { src: "assets/images/characters/silhouette/nami.png", names: ["nami"]},
        { src: "assets/images/characters/silhouette/nicorobin.png", names: ["robin", "nico robin", "nico"]},
        { src: "assets/images/characters/silhouette/roronoazoro.png", names: ["zoro", "roronoa zoro", "roronoa"]},
        { src: "assets/images/characters/silhouette/sanji.png", names: ["sanji", "vismoke sanji"]},
        { src: "assets/images/characters/silhouette/shanks.png", names: ["shanks", "red-haired", "red-haired shanks", "red haired"]},
        { src: "assets/images/characters/silhouette/usopp.png", names: ["usopp"]}
    ];

    // Characters answer array, colored versions
    const characterAnswers = [
        { src: "assets/images/characters/colored/ace.png", names: ["ace", "portgas d ace", "portgas"]},
        { src: "assets/images/characters/colored/brook.png", names: ["brook"]},
        { src: "assets/images/characters/colored/chopper.png", names: ["chopper", "tony tony chopper"]},
        { src: "assets/images/characters/colored/franky.png", names: ["franky", "cutty flam"]},
        { src: "assets/images/characters/colored/jimbei.png", names: ["jimbei", "jinbei", "jinbe"]},
        { src: "assets/images/characters/colored/monkeydluffy.png", names: ["luffy", "monkey d luffy"]},
        { src: "assets/images/characters/colored/nami.png", names: ["nami"]},
        { src: "assets/images/characters/colored/nicorobin.png", names: ["robin", "nico robin", "nico"]},
        { src: "assets/images/characters/colored/roronoazoro.png", names: ["zoro", "roronoa zoro", "roronoa"]},
        { src: "assets/images/characters/colored/sanji.png", names: ["sanji", "vismoke sanji"]},
        { src: "assets/images/characters/colored/shanks.png", names: ["shanks", "red-haired", "red-haired shanks", "red haired"]},
        { src: "assets/images/characters/colored/usopp.png", names: ["usopp"]},
    ];

    let currentCharacter;
    let correctAnswers = 0;
    let incorrectAnswers = 0;

    function showRandomCharacter() {
        // Select a random character
        const randomIndex = Math.floor(Math.random() * characters.length);
        currentCharacter = characters[randomIndex];

        // Set the character image
        characterImage.src = currentCharacter.src;
    }

    document.getElementById("play-button").addEventListener("click", function() {
        // Hide the current section
        document.querySelector(".main-area").style.display = "none";
        // Show the right section
        document.getElementById("quiz-selection").classList.remove("hidden");
    }) ;

    document.getElementById("back-button").addEventListener("click", function() {
        document.getElementById("quiz-selection").classList.add("hidden");
        document.querySelector(".main-area").style.display = "flex";
    }) ;

    charactersButton.addEventListener("click", function() {
        document.getElementById("quiz-selection").classList.add("hidden");
        characterSection.classList.remove("hidden");

        showRandomCharacter();
    });

    saveBackButton.addEventListener("click", function() {
        characterSection.classList.add("hidden");
        document.querySelector(".main-area").style.display = "flex";

        // Reset the displayed scores
        scoreElement.textContent = 0;
        incorrectElement.textContent = 0;
    })

    submitAnswer.addEventListener("click", function() {
        const userAnswer = document.getElementById("quizInput").value.toLowerCase();

        if (currentCharacter.names.includes(userAnswer)) {
            // Increment score
            scoreElement.textContent = parseInt(scoreElement.textContent) + 1;
            correctAnswers++;

            // Show colored character image
            characterImage.classList.add("hidden");
            characterAnswerImage.src = characterAnswers.find(c => c.names[0] === currentCharacter.names[0]).src;
            characterAnswerImage.classList.remove("hidden");

            // Delay for 2 seconds and then continue quiz
            setTimeout(function() {
                characterImage.classList.remove("hidden");
                characterAnswerImage.classList.add("hidden");

                showRandomCharacter();
            }, 2000);
        } else {
            // Increment incorrect score
            incorrectElement.textContent = parseInt(incorrectElement.textContent) + 1;
            incorrectAnswers++;

            // Show colored character image
            characterImage.classList.add("hidden");
            characterAnswerImage.src = characterAnswers.find(c => c.names[0] === currentCharacter.names[0]).src;
            characterAnswerImage.classList.remove("hidden");

            // Delay for 2 seconds and then continue quiz
            setTimeout(function() {
                characterImage.classList.remove("hidden");
                characterAnswerImage.classList.add("hidden");

                showRandomCharacter();
            }, 2000);
        }

        // Clear the input field
        document.getElementById("quizInput").value = "";
    });
});
