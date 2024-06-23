// Make sure all the HTML components are loaded before running the script
document.addEventListener("DOMContentLoaded", function() {
    // Constants
    const charactersButton = document.getElementById("characters-quiz");
    const placesButton = document.getElementById("places-quiz");
    const quotesButton = document.getElementById("quotes-quiz");
    const devilFruitsButton = document.getElementById("fruits-quiz");
    const backButton = document.getElementById("back-button");
    const saveBackButton = document.getElementById("save-back-button");
    const submitAnswerButton = document.querySelector(".answer");
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

    // Data Arrays
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

    const places = [
        { src: "assets/images/places/amazonlily.jpg", names: ["amazon lily"]},
        { src: "assets/images/places/littlegarden.jpg", names: ["little garden"]},
        { src: "assets/images/places/ohara.jpg", names: ["ohara"]},
        { src: "assets/images/places/shandora.jpg", names: ["shandora"]},
        { src: "assets/images/places/wano.jpg", names: ["wano", "land of wano"]},
        { src: "assets/images/places/water7.jpg", names: ["water 7", "water seven"]},
        { src: "assets/images/places/weatheria.jpg", names: ["weatheria"]},
        { src: "assets/images/places/zou.jpg", names: ["zou"]},
    ];

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

    let currentQuestion; 
    let correctAnswers = 0; 
    let incorrectAnswers = 0;
    let scoreElement = document.getElementById("quiz-score");
    let incorrectElement = document.getElementById("quiz-incorrect");
    let quizType;
    let lastQuestion;

    function updateScoresTable() {
        document.querySelector("#scores-table tr:nth-child(1) td:last-child").textContent = correctAnswers;
        document.querySelector("#scores-table tr:nth-child(2) td:last-child").textContent = incorrectAnswers;
    }


    function hideContainers() {
        imageContainer.classList.remove("hidden");
        quoteContainer.classList.add("hidden");
    }

    function updateScoreTitle(type) {
        const typeText = type === "Devil Fruits" ? "Devil Fruits" : type;
        scoreTitle.innerHTML = `${typeText} correct: <span id='quiz-score'>${correctAnswers}</span>`;
        scoreLabel.innerHTML = `${typeText} incorrect: <span id='quiz-incorrect'>${incorrectAnswers}</span>`;
    }

    function getRandomQuestion(arr) {
        let question;
        do {
            question = arr[Math.floor(Math.random() * arr.length)];
        } while (question === lastQuestion);
        lastQuestion = question;
        return question;
    }

    function showQuestion() {
        let questionData;
        switch (quizType) {
            case "Characters":
                questionData = getRandomQuestion(characters);
                quizQuestion.textContent = "Who is this?";
                quizSilhouetteImage.src = questionData.src;
                quizColoredImage.src = characterAnswers[characters.indexOf(questionData)].src;
                quizSilhouetteImage.classList.remove("hidden");
                quizColoredImage.classList.add("hidden");
                break;
            case "Places":
                questionData = getRandomQuestion(places);
                quizQuestion.textContent = "Where is this place?";
                quizSilhouetteImage.src = questionData.src;
                quizSilhouetteImage.classList.remove("hidden");
                break;
            case "Quotes":
                questionData = getRandomQuestion(quotes);
                quizQuestion.textContent = "Who said this?";
                quizQuote.textContent = questionData.quote;
                imageContainer.classList.add("hidden");
                quoteContainer.classList.remove("hidden");
                break;
            case "Devil Fruits":
                questionData = getRandomQuestion(devilFruits);
                quizQuestion.textContent = "What is this Devil Fruit?";
                quizSilhouetteImage.src = questionData.src;
                quizSilhouetteImage.classList.remove("hidden");
                break;
        }
        currentQuestion = questionData;
        quizAnswer.value = ""; // Clear answer input
        updateScoreTitle(quizType);
    }

    function resetQuizSession() {
        scoreElement.textContent = "0";
        incorrectElement.textContent = "0";
    }

    document.getElementById("play-button").addEventListener("click", function() {
        document.querySelector(".main-area").style.display = "none";
        document.getElementById("quiz-selection").classList.remove("hidden");
    });

    scoresButton.addEventListener("click", function() {
        scoresTable.classList.toggle("hidden");
    });

    backButton.addEventListener("click", function() {
        document.getElementById("quiz-selection").classList.add("hidden");
        document.querySelector(".main-area").style.display = "flex";
    });

    [charactersButton, placesButton, quotesButton, devilFruitsButton].forEach(button => {
        button.addEventListener("click", function() {
            quizType = button.id.replace('-quiz', '').replace('characters', 'Characters').replace('places', 'Places').replace('quotes', 'Quotes').replace('fruits', 'Devil Fruits');
            document.getElementById("quiz-selection").classList.add("hidden");
            quizSection.classList.remove("hidden");
            hideContainers();
            showQuestion();
            quizAnswer.focus();
        });
    });

    saveBackButton.addEventListener("click", function() {
        updateScoresTable();
        resetQuizSession();
        quizSection.classList.add("hidden");
        document.querySelector(".main-area").style.display = "flex";
    });

    submitAnswerButton.addEventListener("click", submitAnswer);

    document.getElementById("quiz-input").addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            submitAnswer();
        }
    });

    function submitAnswer() {
        const userAnswer = quizAnswer.value.toLowerCase().trim();
        let isCorrect = false;

        switch (quizType) {
            case "Characters":
                isCorrect = currentQuestion.names.includes(userAnswer);
                break;
            case "Places":
                isCorrect = currentQuestion.names.includes(userAnswer);
                break;
            case "Quotes":
                isCorrect = currentQuestion.character.includes(userAnswer);
                break;
            case "Devil Fruits":
                isCorrect = currentQuestion.name === userAnswer;
                break;
        }

        if (isCorrect) {
            correctAnswers++;
            if (quizType === "Characters") {
                quizSilhouetteImage.classList.add("hidden");
                quizColoredImage.classList.remove("hidden");
            }
        } else {
            incorrectAnswers++;
            quizQuestion.textContent = `Correct answer: ${currentQuestion.names ? currentQuestion.names[0] : currentQuestion.name || currentQuestion.character[0]}`;
        }

        updateScoreTitle(quizType);
        quizAnswer.value = "";

        updateScoreTitle(quizType);
        setTimeout(() => {
            showQuestion();
            quizAnswer.focus();
        }, 2000);
    }
});