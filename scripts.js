$(document).ready(function () {
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
