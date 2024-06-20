// Make sure the script runs after all the elements in the HTML code are loaded
document.addEventListener("DOMContentLoaded", function() {
    // Constants
    const charactersButton = document.getElementById("characters-quiz");
    const placesButton = document.getElementById("places-quiz");
    const quotesButton = document.getElementById("quotes-quiz");
    const devilFruitsButton = document.getElementById("fruits-quiz");
    const backButton = document.getElementById("back-button");
    const saveBackButton = document.getElementById("save-back-button");
    const submitAnswer = document.querySelector(".answer");
    const scoreElement = document.querySelector(".score");
    const incorrectElement = document.querySelector(".incorrect");
    const scoresButton = document.getElementById("scores-button");
    const scoresTable = document.getElementById("scores-table");

    const quizSection = document.getElementById("quiz-section");
    const quizQuestion = document.getElementById("quiz-question");
    const quizImage = document.getElementById("quiz-image");
    const quizQuote = document.getElementById("quiz-quote");
    const quoteContainer = document.getElementById("quote-container");

    // Characters silhouette array
    const characters = [
        { src: "assets/images/characters/silhouette/ace.png", names: ["ace", "portgas d ace", "portgas"]},
        { src: "assets/images/characters/silhouette/brook.png", names: ["brook"]},
        { src: "assets/images/characters/silhouette/chopper.png", names: ["chopper", "tony tony chopper", "tony chopper"]},
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
        { src: "assets/images/characters/colored/ace.png", names: ["ace", "portgas d ace", "portgas", "portgas d. ace"]},
        { src: "assets/images/characters/colored/brook.png", names: ["brook"]},
        { src: "assets/images/characters/colored/chopper.png", names: ["chopper", "tony tony chopper", "tony chopper"]},
        { src: "assets/images/characters/colored/franky.png", names: ["franky", "cutty flam"]},
        { src: "assets/images/characters/colored/jimbei.png", names: ["jimbei", "jinbei", "jinbe"]},
        { src: "assets/images/characters/colored/monkeydluffy.png", names: ["luffy", "monkey d luffy", "monkey d. luffy"]},
        { src: "assets/images/characters/colored/nami.png", names: ["nami"]},
        { src: "assets/images/characters/colored/nicorobin.png", names: ["robin", "nico robin", "nico"]},
        { src: "assets/images/characters/colored/roronoazoro.png", names: ["zoro", "roronoa zoro", "roronoa"]},
        { src: "assets/images/characters/colored/sanji.png", names: ["sanji", "vismoke sanji"]},
        { src: "assets/images/characters/colored/shanks.png", names: ["shanks", "red-haired", "red-haired shanks", "red haired"]},
        { src: "assets/images/characters/colored/usopp.png", names: ["usopp"]},
    ];

    // Places array
    const places = [
        { src: "assets/images/places/amazonlily.jpg", name: "amazon lily"},
        { src: "assets/images/places/littlegarden.jpg", name: "little garden"},
        { src: "assets/images/places/ohara.jpg", name: "ohara"},
        { src: "assets/images/places/shandora.jpg", name: "shandora"},
        { src: "assets/images/places/wano.jpg", name: "wano"},
        { src: "assets/images/places/water7.jpg", name: "water 7"},
        { src: "assets/images/places/weatheria.jpg", name: "weatheria"},
        { src: "assets/images/places/zou.jpg", name: "zou"},
    ];

    // Quotes array
    const quotes = [
        { quote: "I left everything I gathered together in one place.", character: ["roger", "gold d. roger", "gold roger", "gold d roger"] },
        { quote: "Nobody hurts a friend of mine!", character: ["shanks", "red-haired", "red-haired shanks", "red haired"] },
        { quote: "Only I can call my dream stupid!", character: ["zoro", "roronoa", "roronoa zoro"] },
        { quote: "A man dies when people forget him!", character: ["hiriluk", "dr. hiriluk", "dr hiriluk"] },
        { quote: "There comes a time when a man must stand and fight. And that is when his friend's dreams are being laughed at!", character: ["usopp"] },
        { quote: "The dreams of pirates will never end!", character: ["blackbeard", "teach", "marshall d. teach", "marshall d teach"] },
        { quote: "I want to live!", character: ["robin", "nico", "nico robin"] },
        { quote: "The flower of friendship can bloom even in hell.", character: ["bon clay", "mr. 2", "mr 2", "bentham"] },
        
    ];

    // Devil Fruits array
    const devilFruits = [
        { src: "assets/images/devilfruits/bomubomunomi.png", name: "bomu bomu no mi"},
        { src: "assets/images/devilfruits/dorudorunomi.png", name: "doru doru no mi"},
        { src: "assets/images/devilfruits/gomugomunomi.png", name: "gomu gomu no mi"},
        { src: "assets/images/devilfruits/kagekagenomi.png", name: "kage kage no mi"},
        { src: "assets/images/devilfruits/merameranomi.png", name: "merameranomi"},
        { src: "assets/images/devilfruits/opeopenomi.png", name: "ope ope no mi"},
        { src: "assets/images/devilfruits/sunasunanomi.png", name: "suna suna no mi"},
        { src: "assets/images/devilfruits/yomiyominomi.png", name: "yomi yomi no mi"},
    ];

    let currentCharacter;
    let currentPlace;
    let currentQuote;
    let currentDevilFruit;
    let correctAnswers = 0;
    let incorrectAnswers = 0;

    // Characters Section Quiz
    function showRandomCharacter() {
        // Select a random character
        const randomIndex = Math.floor(Math.random() * characters.length);
        currentCharacter = characters[randomIndex];
        quizQuestion.textContent = "Who is this?";
        quizImage.src = currentCharacter.src;
        quizImage.classList.remove("hiddedn");
        quizAnswer.textContent = ""; // Clear answer text area
        updateScoresTitle("Characters");

    }

    // Places Section Quiz
    function showRandomPlace() {
        const randomIndex = Math.floor(Math.random() * places.length);
        currentPlace = places[randomIndex];
        quizQuestion.textContent = "Where is this place?";
        quizImage.src = currentPlace.src;
        quizImage.classList.remove("hidden");
        quizAnswer.textContent = "";
        updateScoresTitle("Places");
    }

    // Quotes Section Quiz
    function showRandomQuote() {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        currentQuote = quotes[randomIndex];
        quizQuestion.textContent = "Who said this?";
        quizImage.src = currentQuote.src;
        quizImage.classList.remove("hidden");
        quizAnswer.textContent = "";
        updateScoresTitle("Quotes");
    }
    
    function updateScoresTable() {
        document.querySelector("#scores-table tr:nth-child(1) td:last-child").textContent = correctAnswers;
        document.querySelector("#scores-table tr:nth-child(2) td:last-child").textContent = incorrectAnswers;
    }

    function focusAnswerBox() {
        document.getElementById("quiz-input").focus();
    }

    // Show Quiz Selection Buttons
    document.getElementById("play-button").addEventListener("click", function() {
        // Hide the current section
        document.querySelector(".main-area").style.display = "none";
        // Show the right section
        document.getElementById("quiz-selection").classList.remove("hidden");
    }) ;

    // Show Score Table
    scoresButton.addEventListener("click", function() {
        scoresTable.classList.toggle("hidden");
    })

    // Show Home Page
    document.getElementById("back-button").addEventListener("click", function() {
        document.getElementById("quiz-selection").classList.add("hidden");
        document.querySelector(".main-area").style.display = "flex";
    }) ;

    // Show Characters Quiz
    charactersButton.addEventListener("click", function() {
        document.getElementById("quiz-selection").classList.add("hidden");
        characterSection.classList.remove("hidden");

        showRandomCharacter();
        focusAnswerBox();
    });

    saveBackButton.addEventListener("click", function() {
        // Get the current scores
        const currentCorrect = parseInt(scoreElement.textContent) || 0;
        const currentIncorrect = parseInt(incorrectElement.textContent) || 0;

        correctAnswers += currentCorrect;
        incorrectAnswers += currentIncorrect;

        // Update scores in the table
        updateScoresTable();

        // Reset the displayed scores
        scoreElement.textContent = 0;
        incorrectElement.textContent = 0;

        characterSection.classList.add("hidden");
        document.querySelector(".main-area").style.display = "flex";
    })

    // Submit using the Enter Key
    document.getElementById("quiz-input").addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            submitAnswer.click();
        }
    })

    submitAnswer.addEventListener("click", function() {
        const userAnswer = document.getElementById("quiz-input").value.toLowerCase();

        if (currentCharacter.names.includes(userAnswer)) {
            // Increment score
            scoreElement.textContent = parseInt(scoreElement.textContent) + 1;

            // Show colored character image
            characterImage.classList.add("hidden");
            characterAnswerImage.src = characterAnswers.find(c => c.names[0] === currentCharacter.names[0]).src;
            characterAnswerImage.classList.remove("hidden");

            // Delay for 2 seconds and then continue quiz
            setTimeout(function() {
                characterImage.classList.remove("hidden");
                characterAnswerImage.classList.add("hidden");

                showRandomCharacter();
                focusAnswerBox();
            }, 2000);
        } else {
            // Increment incorrect score
            incorrectElement.textContent = parseInt(incorrectElement.textContent) + 1;

            // Show colored character image
            characterImage.classList.add("hidden");
            characterAnswerImage.src = characterAnswers.find(c => c.names[0] === currentCharacter.names[0]).src;
            characterAnswerImage.classList.remove("hidden");

            // Delay for 2 seconds and then continue quiz
            setTimeout(function() {
                characterImage.classList.remove("hidden");
                characterAnswerImage.classList.add("hidden");

                showRandomCharacter();
                focusAnswerBox();
            }, 2000);
        }

        // Clear the input field
        document.getElementById("quiz-input").value = "";
    });
});
