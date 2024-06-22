// Make sure the script runs after all the elements in the HTML code are loaded
document.addEventListener("DOMContentLoaded", function() {
    // Constants
    const charactersButton = document.getElementById("characters-quiz");
    const placesButton = document.getElementById("places-quiz");
    const quotesButton = document.getElementById("quotes-quiz");
    const devilFruitsButton = document.getElementById("fruits-quiz");
    const backButton = document.getElementById("back-button");
    const saveBackButton = document.getElementById("save-back-button");
    const submitAnswerButton = document.querySelector(".answer");
    const scoreElement = document.getElementById("quiz-score");
    const incorrectElement = document.getElementById("quiz-incorrect");
    const scoresButton = document.getElementById("scores-button");
    const scoresTable = document.getElementById("scores-table");

    const quizSection = document.getElementById("quiz-section");
    const quizQuestion = document.getElementById("quiz-question");
    const quizAnswer = document.getElementById("quiz-input");
    const quizSilhouetteImage = document.getElementById("silhouette-image");
    const quizColoredImage = document.getElementById("colored-image");
    const imageContainer = document.querySelector(".image-container");
    const quizQuote = document.getElementById("quiz-quote");
    const quoteContainer = document.getElementById("quote-container");
    const scoreArea = document.querySelector(".score-area");
    const scoreTitle = scoreArea.querySelector(".score-title");
    const scoreLabel = scoreArea.querySelector(".score-label");

    // Characters silhouette array
    const characters = [
        { src: "assets/images/characters/silhouette/ace.png", names: ["ace", "portgas d ace", "portgas", "portgas d. ace"]},
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
        { src: "assets/images/places/amazonlily.jpg", names: ["amazon lily"]},
        { src: "assets/images/places/littlegarden.jpg", names: ["little garden"]},
        { src: "assets/images/places/ohara.jpg", names: ["ohara"]},
        { src: "assets/images/places/shandora.jpg", names: ["shandora"]},
        { src: "assets/images/places/wano.jpg", names: ["wano", "land of wano"]},
        { src: "assets/images/places/water7.jpg", names: ["water 7"]},
        { src: "assets/images/places/weatheria.jpg", names: ["weatheria"]},
        { src: "assets/images/places/zou.jpg", names: ["zou"]},
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
        { src: "assets/images/devilfruits/merameranomi.png", name: "mera mera no mi"},
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
    let quizType;

    // Characters Section Quiz
    function showRandomCharacter() {
        // Select a random character
        const randomIndex = Math.floor(Math.random() * characters.length);
        currentCharacter = characters[randomIndex];
        quizQuestion.textContent = "Who is this?";
        quizSilhouetteImage.src = currentCharacter.src;
        quizColoredImage.src = characterAnswers[randomIndex].src;
        quizSilhouetteImage.classList.remove("hidden");
        quizColoredImage.classList.add("hidden");
        quizAnswer.textContent = ""; // Clear answer text area
        updateScoreTitle("Characters");

    }

    // Places Section Quiz
    function showRandomPlace() {
        const randomIndex = Math.floor(Math.random() * places.length);
        currentPlace = places[randomIndex];
        quizQuestion.textContent = "Where is this place?";
        quizSilhouetteImage.src = currentPlace.src;
        quizSilhouetteImage.classList.remove("hidden");
        quizAnswer.textContent = "";
        updateScoreTitle("Places");
    }

    // Quotes Section Quiz
    function showRandomQuote() {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        currentQuote = quotes[randomIndex];
        quizQuestion.textContent = "Who said this?";
        quizQuote.textContent = currentQuote.quote;
        imageContainer.classList.add("hidden");
        quoteContainer.classList.remove("hidden");
        quizAnswer.textContent = "";
        updateScoreTitle("Quotes");
    }

    // Devil Fruits Section Quiz
    function showRandomDevilFruit() {
        const randomIndex = Math.floor(Math.random() * devilFruits.length);
        currentDevilFruit = devilFruits[randomIndex];
        quizQuestion.textContent = "What is this Devil Fruit?";
        quizSilhouetteImage.src = currentDevilFruit.src;
        quizSilhouetteImage.classList.remove("hidden");
        quizAnswer.textContent = "";
        updateScoreTitle("Devil Fruits");
    }
    
    function updateScoresTable() {
        document.querySelector("#scores-table tr:nth-child(1) td:last-child").textContent = correctAnswers;
        document.querySelector("#scores-table tr:nth-child(2) td:last-child").textContent = incorrectAnswers;
    }

    function hideContainers() {
        if (imageContainer.classList.contains("hidden")) {
            imageContainer.classList.remove("hidden");
        }
        if (!quoteContainer.classList.contains("hidden")) {
            quoteContainer.classList.add("hidden");
        }
    }

    function updateScoreTitle(quizType) {
        let scoreText, incorrectText;

        switch (quizType) {
            case "Characters":
                scoreText = `Characters correct: <span id='quiz-score'>${correctAnswers}</span>`;
                incorrectText = `Characters incorrect: <span id='quiz-incorrect'>${incorrectAnswers}</span>`;
                break;
            case "Places":
                scoreText = `Places correct: <span id='quiz-score'>${correctAnswers}</span>`;
                incorrectText = `Places incorrect: <span id='quiz-incorrect'>${incorrectAnswers}</span>`;
                break;
            case "Quotes":
                scoreText = `Quotes correct: <span id='quiz-score'>${correctAnswers}</span>`;
                incorrectText = `Quotes incorrect: <span id='quiz-incorrect'>${incorrectAnswers}</span>`;
                break;
            case "Devil Fruits":
                scoreText = `Devil Fruits correct: <span id='quiz-score'>${correctAnswers}</span>`;
                incorrectText = `Devil Fruits incorrect: <span id='quiz-incorrect'>${incorrectAnswers}</span>`;
                break;
            default:
                break;
        }

        // Update the HTML content
        scoreTitle.innerHTML = scoreText;
        scoreLabel.innerHTML = incorrectText;
    }

    function getNextQuestion(quizType) {
        switch (quizType) {
            case "Characters":
                showRandomCharacter();
                break;
            case "Places":
                showRandomPlace();
                break;
            case "Quotes":
                showRandomQuote();
                break;
            case "Devil":
                showRandomDevilFruit();
                break;
            default:
                break;
        }
    }

    // Focuses on the quiz input for the user
    function focusAnswerBox() {
        document.getElementById("quiz-input").focus();
    }

    function resetQuizSession() {
        correctAnswers = 0;
        incorrectAnswers = 0;
        scoreElement.textContent = 0;
        incorrectElement.textContent = 0;
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
    backButton.addEventListener("click", function() {
        document.getElementById("quiz-selection").classList.add("hidden");
        document.querySelector(".main-area").style.display = "flex";
    }) ;

    // Show Characters Quiz
    charactersButton.addEventListener("click", function() {
        quizType = "Characters";
        document.getElementById("quiz-selection").classList.add("hidden");
        quizSection.classList.remove("hidden");
        hideContainers();

        showRandomCharacter();
        focusAnswerBox();
    });

    // Show Places Quiz
    placesButton.addEventListener("click", function() {
        quizType = "Places";
        document.getElementById("quiz-selection").classList.add("hidden");
        quizSection.classList.remove("hidden");
        hideContainers();

        showRandomPlace();
        focusAnswerBox();
    });

    // Show Quotes Quiz
    quotesButton.addEventListener("click", function() {
        quizType = "Quotes";
        document.getElementById("quiz-selection").classList.add("hidden");
        quizSection.classList.remove("hidden");

        showRandomQuote();
        focusAnswerBox();
    });

    // Show Devil Fruits Quiz
    devilFruitsButton.addEventListener("click", function() {
        quizType = "Devil Fruits";
        document.getElementById("quiz-selection").classList.add("hidden");
        quizSection.classList.remove("hidden");
        hideContainers();

        showRandomDevilFruit();
        focusAnswerBox();
    });

    saveBackButton.addEventListener("click", function() {
        resetQuizSession();

        quizSection.classList.add("hidden");
        document.querySelector(".main-area").style.display = "flex";
    })

    submitAnswerButton.addEventListener("click", function() {
        submitAnswer();
    })

    // Submit using the Enter Key
    document.getElementById("quiz-input").addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            submitAnswer();
        }
    })

    function submitAnswer() {
        const userAnswer = document.getElementById("quiz-input").value.toLowerCase().trim();
        let isCorrect = false;


        switch (quizType) {
            case "Characters":
                isCorrect = currentCharacter.names.includes(userAnswer);
                if (!isCorrect) {
                    quizQuestion.textContent = `Correct answer: ${currentCharacter.names[0]}`;
                }
                break;
            case "Places":
                isCorrect = currentPlace.names.includes(userAnswer);
                if (!isCorrect) {
                    quizQuestion.textContent = `Correct answer: ${currentPlace.names[0]}`;
                }
                break;
            case "Quotes":
                isCorrect = currentQuote.character.includes(userAnswer);
                if (!isCorrect) {
                    quizQuestion.textContent = `Correct answer: ${currentQuote.character[0]}`;
                }
                break;
            case "Devil Fruits":
                isCorrect = currentDevilFruit.name === userAnswer;
                if (!isCorrect) {
                    quizQuestion.textContent = `Correct answer: ${currentDevilFruit.name}`;
                }
                break;
            default:
                break;
        }


        if (isCorrect) {
            correctAnswers++;
        } else {
            incorrectAnswers++;
        }

        scoreElement.textContent = correctAnswers;
        incorrectElement.textContent = incorrectAnswers;

        if (quizType === "Characters") {
            quizSilhouetteImage.classList.add("hidden");
            quizColoredImage.classList.remove("hidden");
        }

        updateScoresTable();


        setTimeout(function() {
            getNextQuestion(scoreTitle.textContent.trim().split(" ")[0]);
        }, 2000);

        document.getElementById("quiz-input").value = "";
    };
});
