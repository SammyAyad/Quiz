function populate() {
    if (quiz.isEnded()) {
        showScores();
    } else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // show choices
        var choices = quiz.getQuestionIndex().choices;
        for (var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }

        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};


function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Fråga " + currentQuestionNumber + " av " + quiz.questions.length;

}

function showScores() {
    var gameOverHtml = "<h1>Resultat</h1>";
    gameOverHtml += "<h2 id='score'> Du fick " + quiz.score + " av " + quiz.questions.length + " poäng!</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHtml;
};

var questions = [
    new Question("Vad heter Sveriges huvudstad?", ["Stockholm", "Göteborg", "Uppsala", "Malmö"], "Stockholm"),
    new Question("Vad heter Turkiets huvudstad?", ["Istanbul", "Alanya", "Ankara", "Bodrum"], "Ankara"),
    new Question("Vad heter Greklands huvudstad?", ["Parga", "Rhodos", "Aten", "Heraklion"], "Aten"),
    new Question("Vad heter Ungerns huvudstad?", ["Budapest", "Pécs", "Szeged", "Eger"], "Budapest"),
    new Question("Vad heter Egyptens huvudstad?", ["Alexandria", "Kairo", "Luxor", "Hurghada"], "Kairo"),
    new Question("Vad heter Portugals huvudstad?", ["Porto", "Lissabon", "Sintra", "Cascais"], "Lissabon")
];

var quiz = new Quiz(questions);

populate();