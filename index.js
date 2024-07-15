var correctAnswer = 0;
var started = false;
var level = 0;

$(document).on("keypress", function () {
    if (!started) {
        nextQuestion();
    }
    started = true;
})

$(".start-btn").on("click", function () {
    if (!started) {
        nextQuestion();
    }
    started = true;
})

function nextQuestion() {
    $(".score").html("score: " + level);
    $("#answer").val(" ");
    level++;
    var x = Math.floor(Math.random() * 12 + 1);
    var y = Math.floor(Math.random() * 12 + 1);
    $(".question").html("What is " + x + " multiply by " + y);
    correctAnswer = x * y;
}

function gameOver() {
    started = false;
    level = 0;

}

$(".sub-btn").on("click", function () {
    var userAnswer = $("#answer").val();
    console.log(userAnswer);
    theChecker(userAnswer);
})


function theChecker(answer) {
    console.log(correctAnswer);
    if (correctAnswer == answer) {
        console.log("correct");
        nextQuestion();
        var correct = new Audio("./sounds/rightanswer.mp3");
        correct.play();

    } else {
        console.log("wrong");
        $(".question").html("You lost! Press any key to start");
        $("#answer").val("correct answer " + correctAnswer);
        var wrong = new Audio("./sounds/wrong-buzzer.mp3");
        wrong.play();
        gameOver();
    }
}




