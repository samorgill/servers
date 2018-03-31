import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent {

  i = 0;
  intervalId;
  numArray = [];

  onStart() {
    this.intervalId = setInterval( () =>{
      this.i++;
    }, 1000)
  }

  onStop(){
    clearInterval(this.intervalId);
  }

}
