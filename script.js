

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
            alert('quiz over'); //add send message function here when it is ready
        }

    }, 1000);
}



function displayQuestions() {
    $('.buttons').show();
    showQuestion();
}

questionNum = 0;
function showQuestion() {
    $('.card-body').text(questions[questionNum].title);
    for (i = 0; i < $('.buttons').children().length; i++) {
        index = $('.buttons').children().get(i);
        $(index).text(questions[questionNum].choices[i]);

    }
    questionNum++;
}


correct = 0;
wrong = 0;
$('.posAnswer').on('click', function () {           //why when i used the id it doesnt work?
    var guess = $('.posAnswer').text();
    if (guess === questions[questionNum].answer) {
        correct++;
    } else {
        wrong++;
    }
    
    showQuestion();
    console.log(guess)
    console.log(correct)
    console.log(wrong)
})




// function sendMessage() {
    //     timeEl.textContent = " ";

    //     var imgEl = document.createElement("img");

    //     imgEl.setAttribute("src", "images/image_1.jpg");
    //     mainEl.appendChild(imgEl);

    // }












