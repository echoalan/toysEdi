import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  
  seeMenu = false;

  showMenu(){
    const button = document.getElementById('menu');
    if(this.seeMenu == false) {
      this.seeMenu = true;
      if(button){
        button.style.backgroundColor = '#fff';
        button.style.color = '#000';
      }
    }else if (this.seeMenu == true){
      this.seeMenu = false;
      if(button){
        button.style.backgroundColor = '#323232';
        button.style.color = '#fff';
      }
    }
  }
}
