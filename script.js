

var btnChild = 1;
for (i = 0; i < $('.buttons').children().length; i++) {

    index = $('.buttons').children().get(i)
    $(index).attr('data-number', btnChild)
    btnChild++
}

$('#startGameBtn').on('click', function () {
    $('#startGameBtn').hide();
    //start timer
    setTime();
    //pull up questions
    displayQuestions();
})


var secondsLeft = 60;

function setTime() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        $('#countDown').text('Timer: ' + secondsLeft);

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            // put end of game score and record of high score from local storage here.
            populateStorage();

        } else if (questionNum === questions.length -1){
            clearInterval(timerInterval);
        }

    }, 1000);
}

function timeSubtraction() {
    secondsLeft = secondsLeft - 10;
}

// function scoreBoard() {
//     var gameScore = `Correct Answers: ${correct} \nWrong Answers: ${wrong}`;
//     var highScore = localStorage.getItem(scoreRecord);
//     alert(`END OF GAME! \nYour score: ${gameScore} \nHigh score board: ${highScore}`);
// }



function displayQuestions() {
    $('.buttons').show();
    showQuestion();
}

questionNum = 0;
function showQuestion() {
    if (questionNum != questions.length -1 && secondsLeft != 0) {
        $('.card-body').text(questions[questionNum].title);
        for (i = 0; i < $('.buttons').children().length; i++) {
            index = $('.buttons').children().get(i);
            $(index).text(questions[questionNum].choices[i]);
        }
    } else {
        populateStorage();
    }


}

function populateStorage() {

    var playerInitials = prompt("END OF GAME! \nTo save your score enter your initials: ");
    var playerScore = `correct: ${correct} \nwrong: ${wrong}`

    localStorage.setItem(playerInitials, playerScore);
    alert(`YOUR SCORE: \n\n${(playerScore)} \n\n\nYOUR HIGH SCORE: \n\n${localStorage.getItem(playerInitials)}`);

    
}

correct = 0;
wrong = 0;
$('.posAnswer').on('click', function () {           //why when i used the id it doesnt work?
    var guess = $(this).text();
    if (guess === questions[questionNum].answer) {
        correct++;

    } else {
        wrong++;
        timeSubtraction();

    }
    questionNum++;
    showQuestion();
    console.log('2' + guess)
    console.log(correct)
    console.log(wrong)
})















// function sendMessage() {
//         timeEl.textContent = " ";

//         var imgEl = document.createElement("img");

//         imgEl.setAttribute("src", "images/image_1.jpg");
//         mainEl.appendChild(imgEl);

//     }












