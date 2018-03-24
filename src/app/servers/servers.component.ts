import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})

export class ServersComponent implements OnInit{
  title = 'Servers Component';

  allowNewServer = false;
  serverCreationStatus = 'No server was created';
  serverName = 'Test server';
  serverCreated = false;

  constructor(){
    setTimeout(() =>{
      this.allowNewServer = true;
    }, 2000)
  }

  onCreateServer(){
    this.serverCreated = true;
    this.serverCreationStatus = this.serverName + ' server created';

  }

  ngOnInit(){

  }

}
