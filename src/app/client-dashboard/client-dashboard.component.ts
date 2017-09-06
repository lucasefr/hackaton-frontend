import {Component, OnInit, Input} from '@angular/core';
import {ClientService} from '../services/client.service';
import { Client } from '../client-register/client';
import { Message } from '../client-register/message';

@Component({
    selector: 'app-client-dashboard',
    templateUrl: './client-dashboard.component.html',
    styleUrls: ['./client-dashboard.component.css']
  })

  export class ClientDashboardComponent implements OnInit {

    clients: Client[] = [];
    @Input() client: Client = new Client();
    returnMsg: Message;


    constructor(
      private clientService: ClientService
    ) {}

    ngOnInit(): void {
      this.clientService.getClients().then(clients => this.clients = clients);
    }

    deleteClient(): void {
        if(this.client.id){
            this.clientService.deleteClient(this.client)
            .then(msg => this.returnMsg = msg);
        }else{
            
        }
    }

  }
