import {AfterViewInit, Component, Output} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  even: boolean;
  num: number;
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  incoming(num: number){

    if(num % 2 === 0){
      this.evenNumbers.push(num);
    } else{
      this.oddNumbers.push(num);
    }
  }

  // @Output() myEvent;
  //
  // serverElements = [{
  //   type: 'blueprint',
  //   name: 'Testserver',
  //   content: 'This is my test server'
  // }];
  //
  //
  // onServerAdded(serverData: {serverName: string, serverContent: string}) {
  //   this.serverElements.push({
  //     type: 'server',
  //     name: serverData.serverName,
  //     content: serverData.serverContent
  //   });
  // }
  //
  // onBlueprintAdded(blueprintData: {serverName: string, serverContent: string}) {
  //   this.serverElements.push({
  //     type: 'blueprint',
  //     name: blueprintData.serverName,
  //     content: blueprintData.serverContent
  //   });
  // }
  //
  // onChangeFirst(){
  //   this.serverElements[0].name = 'Changed!';
  // }
  //
  // onDestroyed(){
  //   this.serverElements.splice(0, 1);
  // }



}
