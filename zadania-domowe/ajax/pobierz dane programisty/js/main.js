$(document).ready(function () {

    $('.get-data').click(function () {

        $.getJSON('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php')
            .done(function (data) {

                let dane = document.getElementById('dane-programisty');
                let pImie = document.createElement('p');
                let pNazwisko = document.createElement('p');
                let pZawod = document.createElement('p');
                let pFirma = document.createElement('p');

                pImie.innerText = `Imie: ${data.imie}`;
                pNazwisko.innerText = `Nazwisko: ${data.nazwisko}`;
                pZawod.innerText = `Zawód: ${data.zawod}`;
                pFirma.innerText = `Firma: ${data.firma}`;

                dane.appendChild(pImie);
                dane.appendChild(pNazwisko);
                dane.appendChild(pZawod);
                dane.appendChild(pFirma);

            })
            .fail(function (error) {
                console.error(error);
            })

    });
});



