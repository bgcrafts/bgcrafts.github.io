$(document).ready(function () {

    $('.get-data').click(function () {

        $.getJSON('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php')
            .done(function (data) {
                console.log(data);
            })
            .fail(function (error) {
                console.error(error);
            }),

            $('#dane-programisty').text(data);


    });
});

