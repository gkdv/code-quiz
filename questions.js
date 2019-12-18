var questions = [
    {
        title: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
    },
    {
        title: "The condition in an if / else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
    },
    ///etc.
];



$('.card-body').text(questions[0].title);

var btnChild = 1;
for (i = 0; i < $('.buttons').children().length; i++){

    index = $('.buttons').children().get(i)
    $(index).attr('data-number', btnChild)
    $(index).text(questions[0].choices[i])
    
    btnChild++
}
