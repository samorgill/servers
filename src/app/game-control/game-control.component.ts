import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent {

  i = 0;
  intervalId;

  @Output() myEvent = new EventEmitter<number>();

  onStart() {
    this.intervalId = setInterval( () =>{

      this.myEvent.emit(this.i);
      this.i++;
    }, 1000)
  }

  onStop(){
    clearInterval(this.intervalId);
  }

}
