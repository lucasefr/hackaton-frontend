import { Component } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { Client } from '../client-register/client';
import { Message } from '../client-register/message';

@Injectable()
export class ClientService {

    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http: Http) {}

    saveClient(client: Client): Promise<Message> {
        return this.http
        .post('http://localhost:8080/api/client',
               client,
               {headers: this.headers})
        .toPromise()
        .then(response => response.json() as Message)
        .catch(this.handleError);
    }

    deleteClient(client: Client): Promise<Message> {
        return this.http
        .post('http://localhost:8080/api/client/delete',
               client,
               {headers: this.headers})
        .toPromise()
        .then(response => response.json() as Message)
        .catch(this.handleError);
    }

    updateClient(client: Client): Promise<Message> {
        return this.http
        .put('http://localhost:8080/api/client',
               client,
               {headers: this.headers})
        .toPromise()
        .then(response => response.json() as Message)
        .catch(this.handleError);
    }

    getClients(): Promise<Client[]> {
        return this.http.get('http://localhost:8080/api/client')
        .toPromise()
        .then(response => response.json() as Client[])
        .catch(this.handleError);
    }

    getClientById(id: number): Promise<Client> {
        return this.http.get(`http://localhost:8080/api/client/${id}`)
        .toPromise()
        .then(response => response.json() as Client)
        .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('HACKATON ERROR', error);
        return Promise.reject(error.message || error);
    }
}