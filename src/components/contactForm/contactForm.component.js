import { Component } from '@angular/core';

@Component({
  selector: 'contactForm',
  templateUrl: 'dist/html/contactForm.html'
})

export class ContactFormComponent {
  submitContactForm($event) {
    //alert();
    $event.preventDefault();
    var x = document.forms['contactForm']['email'].value;
    if (x == "") {
      alert("email must be filled out");
      return false;
    } else {
      $('#contactForm').fadeOut();
      $("#success").fadeIn();
      alert('Thank You For Contacting Erionna Davis!!!');
    }
  }
}
