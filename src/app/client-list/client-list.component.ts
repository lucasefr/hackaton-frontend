import { Component, OnInit, Input } from '@angular/core';
import {ClientService} from '../services/client.service';
import { Client } from '../client-register/client';
import { Message } from '../client-register/message';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})

export class ClientListComponent implements OnInit {

  clients: Client[] = [];
  @Input() client: Client = new Client();
  returnMsg: Message;

  

  constructor(
    private clientService: ClientService
  ) {}

  ngOnInit(): void {
    this.clientService.getClients().then(clients => this.clients = clients);
  }

  deleteClient(client): void {
    if(this.client.id){
        this.clientService.deleteClient(client)
        .then(msg => this.returnMsg = msg);
    }else{
        
    }
}

}
