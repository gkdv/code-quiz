

$('.card-body').text(questions[0].title);

var btnChild = 1;
for (i = 0; i < $('.buttons').children().length; i++){

    index = $('.buttons').children().get(i)
    $(index).attr('data-number', btnChild)
    $(index).text(questions[0].choices[i])
    
    btnChild++
}