import { Component } from '@angular/core';

@Component({
  selector: 'navigation',
  templateUrl: 'dist/html/navigation.html'
})

export class NavigationComponent {
  name = 'Erionna Davis';


  test() {
    alert("hello me");
  }
}
