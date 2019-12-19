

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
    //pull up first question
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

// function sendMessage() {
//     timeEl.textContent = " ";

//     var imgEl = document.createElement("img");

//     imgEl.setAttribute("src", "images/image_1.jpg");
//     mainEl.appendChild(imgEl);

// }













// $('.card-body').text(questions[0].title);
// $(index).text(questions[0].choices[i])