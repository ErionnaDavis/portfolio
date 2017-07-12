function contactSubmit() {
    var x = document.forms['contactForm']['email'].value;
    if (x == "") {
        alert("email must be filled out");
        return false;
    } else {
       alert('Thank You For Contacting Erionna Davis!!!'); 
    }
}
