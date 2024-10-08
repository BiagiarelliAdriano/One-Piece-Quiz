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

    // Data array for characters silhouette images
    const characters = [
        { src: "assets/images/characters/silhouette/ace.png", names: ["Ace", "Portgas D. Ace", "Portgas D Ace", "Portgas"]},
        { src: "assets/images/characters/silhouette/brook.png", names: ["Brook"]},
        { src: "assets/images/characters/silhouette/chopper.png", names: ["Chopper", "Tony Tony Chopper", "Tony Chopper"]},
        { src: "assets/images/characters/silhouette/franky.png", names: ["Franky", "Cutty Flam"]},
        { src: "assets/images/characters/silhouette/jimbei.png", names: ["Jinbe", "Jinbei", "Jimbei"]},
        { src: "assets/images/characters/silhouette/monkeydluffy.png", names: ["Monkey D. Luffy", "Monkey D Luffy", "Luffy"]},
        { src: "assets/images/characters/silhouette/nami.png", names: ["Nami"]},
        { src: "assets/images/characters/silhouette/nicorobin.png", names: ["Nico Robin", "Robin", "Nico"]},
        { src: "assets/images/characters/silhouette/roronoazoro.png", names: ["Roronoa Zoro", "Zoro", "Roronoa"]},
        { src: "assets/images/characters/silhouette/sanji.png", names: ["Sanji", "Vismoke Sanji"]},
        { src: "assets/images/characters/silhouette/shanks.png", names: ["Shanks", "Red-haired", "Red-haired Shanks", "Red haired"]},
        { src: "assets/images/characters/silhouette/usopp.png", names: ["Usopp"]}
    ];

    // Data array for characters colored images
    const characterAnswers = [
        { src: "assets/images/characters/colored/ace.png", names: ["Ace", "Portgas D. Ace", "Portgas D Ace", "Portgas"]},
        { src: "assets/images/characters/colored/brook.png", names: ["Brook"]},
        { src: "assets/images/characters/colored/chopper.png", names: ["Chopper", "Tony Tony Chopper", "Tony Chopper"]},
        { src: "assets/images/characters/colored/franky.png", names: ["Franky", "Cutty Flam"]},
        { src: "assets/images/characters/colored/jimbei.png", names: ["Jinbe", "Jinbei", "Jimbei"]},
        { src: "assets/images/characters/colored/monkeydluffy.png", names: ["Monkey D. Luffy", "Monkey D Luffy", "Luffy"]},
        { src: "assets/images/characters/colored/nami.png", names: ["Nami"]},
        { src: "assets/images/characters/colored/nicorobin.png", names: ["Nico Robin", "Robin", "Nico"]},
        { src: "assets/images/characters/colored/roronoazoro.png", names: ["Roronoa Zoro", "Zoro", "Roronoa"]},
        { src: "assets/images/characters/colored/sanji.png", names: ["Sanji", "Vismoke Sanji"]},
        { src: "assets/images/characters/colored/shanks.png", names: ["Shanks", "Red-haired", "Red-haired Shanks", "Red haired"]},
        { src: "assets/images/characters/colored/usopp.png", names: ["Usopp", "God Usopp"]}
    ];

    // Data array for places images
    const places = [
        { src: "assets/images/places/amazonlily.jpg", names: ["Amazon Lily"]},
        { src: "assets/images/places/littlegarden.jpg", names: ["Little Garden"]},
        { src: "assets/images/places/ohara.jpg", names: ["Ohara"]},
        { src: "assets/images/places/shandora.jpg", names: ["Shandora"]},
        { src: "assets/images/places/wano.jpg", names: ["Wano", "Land of Wano"]},
        { src: "assets/images/places/water7.jpg", names: ["Water Seven", "Water 7"]},
        { src: "assets/images/places/weatheria.jpg", names: ["Weatheria"]},
        { src: "assets/images/places/zou.jpg", names: ["Zou"]},
        { src: "assets/images/places/flevance.jpg", names: ["Flevance"]},
        { src: "assets/images/places/marygeoise.jpg", names: ["Mary Geoise"]},
        { src: "assets/images/places/punkhazard.jpg", names: ["Punk Hazard"]},
        { src: "assets/images/places/wholecakeisland.jpg", names: ["Whole Cake Island", "Whole Cake"]}
    ];

    // Data array for quotes quiz
    const quotes = [
        { quote: "I left everything I gathered together in one place.", character: ["Gold D. Roger", "Roger", "Gold Roger", "Gold D Roger"] },
        { quote: "Nobody hurts a friend of mine!", character: ["Shanks", "Red-haired", "Red-haired Shanks", "Red haired"] },
        { quote: "Only I can call my dream stupid!", character: ["Roronoa Zoro", "Zoro", "Roronoa"]},
        { quote: "A man dies when people forget him!", character: ["Dr. Hiriluk", "Hiriluk", "Dr Hiriluk"] },
        { quote: "There comes a time when a man must stand and fight. And that is when his friend's dreams are being laughed at!", character: ["Usopp", "God Usopp"] },
        { quote: "The dreams of pirates will never end!", character: ["Marshall D. Teach", "Teach", "Blackbeard", "Marshall D Teach"] },
        { quote: "I want to live!", character: ["Nico Robin", "Robin", "Nico"]},
        { quote: "The flower of friendship can bloom even in hell.", character: ["Bon Clay", "Mr. 2", "Mr 2", "Bentham"] },
        { quote: "Maybe nothing in this world happens by accident. As everything happens for a reason, our destiny slowly takes form.", character: ["Rayleigh", "Silvers Rayleigh", "Rayleigh Silvers", "Silvers"]},
        { quote: "People don't fear god, fear itself is god.", character: ["Enel", "Eneru"]},
        { quote: "I am going to be King of the Pirates!", character: ["Monkey D. Luffy", "Monkey D Luffy", "Luffy"]},
        { quote: "Weakness is a sin. The weak have no place in this world.", character: ["Crocodile", "Mr. 0", "Mr 0", "Sir Crocodile"]}


        
    ];

    // Data array for devil fruits images
    const devilFruits = [
        { src: "assets/images/devilfruits/bomubomunomi.png", name: "Bomu Bomu no Mi"},
        { src: "assets/images/devilfruits/dorudorunomi.png", name: "Doru Doru no Mi"},
        { src: "assets/images/devilfruits/gomugomunomi.png", name: "Gomu Gomu no Mi"},
        { src: "assets/images/devilfruits/kagekagenomi.png", name: "Kage Kage no Mi"},
        { src: "assets/images/devilfruits/merameranomi.png", name: "Mera Mera no Mi"},
        { src: "assets/images/devilfruits/opeopenomi.png", name: "Ope Ope no Mi"},
        { src: "assets/images/devilfruits/sunasunanomi.png", name: "Suna Suna no Mi"},
        { src: "assets/images/devilfruits/yomiyominomi.png", name: "Yomi Yomi no Mi"},
        { src: "assets/images/devilfruits/itoitonomi.png", name: "Ito Ito no Mi"},
        { src: "assets/images/devilfruits/jikijikinomi.png", name: "Jiki Jiki no Mi"},
        { src: "assets/images/devilfruits/mochimochinomi.png", name: "Mochi Mochi no Mi"},
        { src: "assets/images/devilfruits/smile.png", name: "Smile"}
    ];

    // Global variables
    let currentQuestion; 
    let correctAnswers = 0; 
    let incorrectAnswers = 0;
    let quizType;
    let lastQuestion;
    let remainingQuestions = [];
    let endMessage;
    let endMessageElement = document.getElementById("end-game-message");

    // Update the scores table with the user's correct answers and incorrect answers
    function updateScoresTable() {
        document.querySelector("#scores-table tr:nth-child(1) td:last-child").textContent = correctAnswers;
        document.querySelector("#scores-table tr:nth-child(2) td:last-child").textContent = incorrectAnswers;
    }

    // Hides the image container and shows the quote container
    function hideContainers() {
        imageContainer.classList.remove("hidden");
        quoteContainer.classList.add("hidden");
    }

    // Update the score title to match whatever quiz the user is playing in that moment
    function updateScoreTitle(type) {
        const typeText = type === "Devil Fruits" ? "Devil Fruits" : type;
        scoreTitle.innerHTML = `${typeText} correct: <span id='quiz-score'>${correctAnswers}</span>`;
        scoreLabel.innerHTML = `${typeText} incorrect: <span id='quiz-incorrect'>${incorrectAnswers}</span>`;
    }

    // Gives the user a random question, while also making sure no question will repeat twice in a row
    function getRandomQuestion() {
        if (remainingQuestions.length === 0){
            endGame();
            return null;
        }

        const randomIndex = Math.floor(Math.random() * remainingQuestions.length);
        const question = remainingQuestions[randomIndex];
        remainingQuestions.splice(randomIndex, 1); // Remove the question from remaining questions
        lastQuestion = question;
        return question;
    }

    // Makes sure to ignore case sensitivity
    function compareStringsIgnoreCase(a, b) {
        return a.toLowerCase() === b.toLowerCase();
    }

    // Shows the correct kind of question depending on what section the user is accessing
    function showQuestion() {
        const questionData = getRandomQuestion();
        if (!questionData) return;

        switch (quizType) {
            case "Characters":
                quizQuestion.textContent = "Who is this?";
                quizSilhouetteImage.src = questionData.src;
                quizColoredImage.src = characterAnswers[characters.indexOf(questionData)].src;
                quizSilhouetteImage.classList.remove("hidden");
                quizColoredImage.classList.add("hidden");
                break;
            case "Places":
                quizQuestion.textContent = "Where is this place?";
                quizSilhouetteImage.src = questionData.src;
                quizSilhouetteImage.classList.remove("hidden");
                quizColoredImage.classList.add("hidden");
                break;
            case "Quotes":
                quizQuestion.textContent = "Who said this?";
                quizQuote.textContent = questionData.quote;
                imageContainer.classList.add("hidden");
                quoteContainer.classList.remove("hidden");
                quizColoredImage.classList.add("hidden");
                break;
            case "Devil Fruits":
                quizQuestion.textContent = "What is this Devil Fruit?";
                quizSilhouetteImage.src = questionData.src;
                quizSilhouetteImage.classList.remove("hidden");
                quizColoredImage.classList.add("hidden");
                break;
        }
        currentQuestion = questionData;
        quizAnswer.value = ""; // Clear answer input
        updateScoreTitle(quizType);
    }

    // Ends the game when the user finishes to answer all the questions
    function endGame() {

        // Determine the end message based on the incorrect score
        if (incorrectAnswers === 0) {
            endMessage = "Congratulations! You are truly the King of the Pirates!";
        } else if (incorrectAnswers >= 1 && incorrectAnswers <= 6) {
            endMessage = "Congratulations! You are on your way to become a great pirate!";
        } else if (incorrectAnswers >= 7 && incorrectAnswers <= 11) {
            endMessage = "Congratulations! It seems you are still new to the world of pirates!";
        } else if (incorrectAnswers === 12) {
            endMessage = "Congratulations! Have you even watched the show?";
        }

        // Create a new h1 element for the end game message
        if (!endMessageElement) {
            endMessageElement = document.createElement("h1");
            endMessageElement.id = "end-game-message";
        }
        
        // Set the text content of the end game message
        endMessageElement.textContent = endMessage;

        // Add the end game message to the left-section
        quizSection.appendChild(endMessageElement);

        // Hide all elements in the quiz section except for the Save & Back button
        document.querySelector(".quiz-content").style.display = "none";

    }

    function resetQuizSection() {
        // Hide end game message if it exists
        if (endMessageElement) {
            endMessageElement.style.display = "none";
        }

        updateScoresTable();
        correctAnswers = 0;
        incorrectAnswers = 0;
        

        document.querySelector(".quiz-content").style.display = "flex";
    }

    // When clicked, the play button will hide the home page and show the quiz selection section
    document.getElementById("play-button").addEventListener("click", function() {
        document.querySelector(".main-area").style.display = "none";
        document.getElementById("quiz-selection").classList.remove("hidden");
    });

    // When clicked, the scores button will hide the button itself and show the scores table
    scoresButton.addEventListener("click", function() {
        scoresButton.classList.add("hidden");
        scoresTable.classList.toggle("hidden");
    });

    // When clicked, the score table will hide itself and show the score button again
    scoresTable.addEventListener("click", function() {
        scoresTable.classList.toggle("hidden");
        scoresButton.classList.remove("hidden");
    });

    // When clicked, the back button will hide the quiz selection section and show the home page
    backButton.addEventListener("click", function() {
        document.getElementById("quiz-selection").classList.add("hidden");
        document.querySelector(".main-area").style.display = "flex";
    });

    // Each of the four quiz buttons, when clicked, will hide the quiz selection section and show their respective quizzes
    [charactersButton, placesButton, quotesButton, devilFruitsButton].forEach(button => {
        button.addEventListener("click", function() {
            quizType = button.id.replace('-quiz', '').replace('characters', 'Characters').replace('places', 'Places').replace('quotes', 'Quotes').replace('fruits', 'Devil Fruits');
            document.getElementById("quiz-selection").classList.add("hidden");
            quizSection.classList.remove("hidden");
            hideContainers();

            // Initialize remaining questions
            switch (quizType) {
                case "Characters":
                    remainingQuestions = [...characters];
                    break;
                case "Places":
                    remainingQuestions = [...places];
                    break;
                case "Quotes":
                    remainingQuestions = [...quotes];
                    break;
                case "Devil Fruits":
                    remainingQuestions = [...devilFruits];
                    break;
            }

            showQuestion();
            quizAnswer.focus();
        });
    });

    // When clicked, the save & back button will hide the quiz section and show the quiz selection
    saveBackButton.addEventListener("click", function() {
        updateScoresTable();
        resetQuizSection();
        quizSection.classList.add("hidden");
        document.getElementById("quiz-selection").classList.remove("hidden");
    });

    // When clicked, the submit button will call the submitAnswer function
    submitAnswerButton.addEventListener("click", submitAnswer);

    // Allows the user to call the submitAnswer function also when pressing the Enter key on their keyboard
    document.getElementById("quiz-input").addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            submitAnswer();
        }
    });

    // Disable all interactive elements when pressing the Answer button
    function disableInteractions() {
        submitAnswerButton.disabled = true;
        quizAnswer.disabled = true;
        saveBackButton.disabled = true;
    }

    // Enable all interactive elements after the two seconds cooldown
    function enableInteractions() {
        submitAnswerButton.disabled = false;
        quizAnswer.disabled = false;
        saveBackButton.disabled = false;
    }

    // Checks if the user answer is correct and gives the correct score whether the answer was correct or incorret, then shows a following question
    function submitAnswer() {
        const userAnswer = quizAnswer.value.toLowerCase().trim();

        // Check if the input is empty or contains only whitespace
        if (userAnswer === "") {
            alert("Please enter at least one letter.");
            quizAnswer.focus();
            return;
        }

        disableInteractions(); // Disables interactions for the process
        let isCorrect = false;
    
        switch (quizType) {
            case "Characters":
                isCorrect = currentQuestion.names.some(name => compareStringsIgnoreCase(name, userAnswer));
                break;
            case "Places":
                isCorrect = currentQuestion.names.some(name => compareStringsIgnoreCase(name, userAnswer));
                break;
            case "Quotes":
                isCorrect = currentQuestion.character.some(name => compareStringsIgnoreCase(name, userAnswer));
                break;
            case "Devil Fruits":
                isCorrect = compareStringsIgnoreCase(currentQuestion.name, userAnswer);
                break;
        }

        if (isCorrect) {
            correctAnswers++;
            quizQuestion.textContent = "Correct!";
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
            enableInteractions(); // Re-enable interactions at the end of the process
            quizAnswer.focus();
        }, 2000);
    }
});