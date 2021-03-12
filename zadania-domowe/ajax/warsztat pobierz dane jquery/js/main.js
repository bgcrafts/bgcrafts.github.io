console.log('Warsztat pobierz dane po kliknięciu (jQuery)');
// https://akademia108.pl/api/ajax/get-post.php

$(document).ready(function() {

    $('#get-data').click(function() {
        // wariant 1
        // $.get('https://akademia108.pl/api/ajax/get-post.php')
        // .done(function(data) {

        //     let pId = $('<p></p>').text(`Post ID: ${data.id}`);
        //     let pUserId = $('<p></p>').text(`User ID: ${data.UserId}`);
        //     let pTitle = $('<p></p>').text(`Title: ${data.title}`);
        //     let pBody = $('<p></p>').text(`Title: ${data.body}`);
        //     let hr = $('<hr/>');

        //     let jqBody = $('body')

        //     jqBody.append(pId);
        //     jqBody.append(pUserId);
        //     jqBody.append(pTitle);
        //     jqBody.append(pBody);
        //     jqBody.append(hr);

        //     console.log(pId);
        // })
        // .fail(function(error) {
        //     console.error(error);
        // });

// wariant 2  getJSON
        $.getJSON('https://akademia108.pl/api/ajax/get-post.php')
        .done(function(data) {

            let pId = $('<p></p>').text(`Post ID: ${data.id}`);
            let pUserId = $('<p></p>').text(`User ID: ${data.UserId}`);
            let pTitle = $('<p></p>').text(`Title: ${data.title}`);
            let pBody = $('<p></p>').text(`Title: ${data.body}`);
            let hr = $('<hr/>');

            let jqBody = $('body')

            jqBody.append(pId);
            jqBody.append(pUserId);
            jqBody.append(pTitle);
            jqBody.append(pBody);
            jqBody.append(hr);

            // console.log(pId);
        })
        .fail(function(error) {
            console.error(error);
        });
    });
});