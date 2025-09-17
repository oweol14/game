const allQuestions = {
    easy: [
        { question: "2 + 2 = ?", options: ["3", "4", "5"], answer: "4" },
        { question: "Capital of France?", options: ["Paris", "London", "Rome"], answer: "Paris" },
        { question: "Which is a fruit?", options: ["Carrot", "Apple", "Potato"], answer: "Apple" }
         
    ],
    medium: [
        { question: "12 x 8 = ?", options: ["96", "108", "88"], answer: "96" },
        { question: "Who painted Mona Lisa?", options: ["Van Gogh", "Da Vinci", "Picasso"], answer: "Da Vinci" },
        { question: "Largest planet?", options: ["Earth", "Mars", "Jupiter"], answer: "Jupiter" }
    ],
    hard: [
        { question: "What is the derivative of x²?", options: ["2x", "x", "x²"], answer: "2x" },
        { question: "E = mc² is by?", options: ["Newton", "Einstein", "Tesla"], answer: "Einstein" },
        { question: "Smallest prime number?", options: ["1", "2", "3"], answer: "2" }
    ]
};

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

let questions = allQuestions[difficulty] || allQuestions.easy;
shuffle(questions);

let currentQuestion = 0;
let score = 0;

const quizContent = document.getElementById("quiz-content");

function showQuestion() {
    const q = questions[currentQuestion];
    const letters = ['A', 'B', 'C', 'D']; // Letters for options

    quizContent.innerHTML = `
        <div class="question">
            <p><strong>${currentQuestion + 1}.</strong> ${q.question}</p>
            ${q.options.map((opt, index) => `
                <button class="option-btn"><strong>${letters[index]}.</strong> ${opt}</button>
            `).join("")}
        </div>
    `;

    document.querySelectorAll(".option-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            // Disable all buttons
            document.querySelectorAll(".option-btn").forEach(b => b.disabled = true);

            // Add correct/wrong styling
            if (btn.textContent.includes(q.answer)) {
                btn.classList.add("correct");
                score++;
            } else {
                btn.classList.add("wrong");
            }

            // Automatically go to next question
            setTimeout(() => {
                currentQuestion++;
                if (currentQuestion < questions.length) {
                    showQuestion();
                } else {
                    // Quiz finished: show score + circular retry button
                    quizContent.innerHTML = `
                        <h2>Quiz Finished!</h2>
                        <p>Your score: ${score}/${questions.length}</p>
                        <button id="retry-btn" class="option-btn" style="width:60px; height:60px; padding:0; font-size:1.5rem; border-radius:50%;">🔄</button>
                    `;

                    document.getElementById("retry-btn").addEventListener("click", () => {
                        currentQuestion = 0;
                        score = 0;
                        shuffle(questions); // optional: reshuffle
                        showQuestion();
                    });
                }
            }, 1000);
        });
    });
}

// Start quiz
showQuestion();
