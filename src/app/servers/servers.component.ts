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
  servers = ['test server', 'test server 2'];

  constructor(){
    setTimeout(() =>{
      this.allowNewServer = true;
    }, 2000)
  }

  ngOnInit(){

  }

  onCreateServer(){
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = this.serverName + ' server created';

  }



}
