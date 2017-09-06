import {Component, Input, OnInit} from '@angular/core';
import { Client } from './client';
import { Location } from '@angular/common';
import { ClientService } from '../services/client.service';
import { Message } from '../client-register/message';
import { ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'app-client-register',
    templateUrl: './client-register.component.html',
    styleUrls: ['./client-register.component.css']
  })

  export class ClientRegisterComponent implements OnInit {

    @Input() client: Client = new Client();
    returnMsg: Message;

    constructor(
        private location: Location,
        private route: ActivatedRoute,
        private clientService: ClientService
    ) {}

    ngOnInit(): void {
        this.route.params.subscribe((params: Params) => {
            const clientId = params['clientId'];
            if(clientId) {
                this.clientService.getClientById(clientId)
                    .then(client => this.client = client);
                console.log('CLIENT: ', this.client);
            }
          });
    }

    goBack(): void {
        this.location.back();
    }

    saveClient(): void {
        if(this.client.id){
            this.clientService.updateClient(this.client)
            .then(msg => this.returnMsg = msg);
        }else{
            this.clientService.saveClient(this.client)
                .then(msg => this.returnMsg = msg);
        }
    }

    deleteClient(): void {
        if(this.client.id){
            this.clientService.deleteClient(this.client)
            .then(msg => this.returnMsg = msg);
        }else{
            
        }
    }

  }
