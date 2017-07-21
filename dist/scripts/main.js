var projects = [
    {
        "name": "H2o Pub And Grill &#9774;"
    }, {
        "name": "Try.Jquery &#9992;"
    }, {
        "name": "Hospitality&Tourism &#9992;"

    }, {
        "name": "Business Managment &#9743;"

    }, {
        "name": "Computer Networking &#9773"

    }, {
        "name": "Electricity/Electronics &#10002"

    }
];
$(document).ready(function () {
    $.each(projects, function (index, value) {
        console.log(value);
        $("#projects").append('<li>' + value.name + '</li>');

    });
    $("#contactForm").on('submit', contactSubmit);
});
function contactSubmit() {
    event.preventDefault();
    var x = document.forms['contactForm']['email'].value;
    if (x == "") {
        alert("email must be filled out");
        return false;
    } else {
        $(this).fadeOut();
        $("#success").fadeIn();
        //alert('Thank You For Contacting Erionna Davis!!!');



    }
}
