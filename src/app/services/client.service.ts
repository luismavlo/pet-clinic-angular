import { HttpClient } from '@angular/common/http';
import { Injectable, signal, inject } from '@angular/core';

interface State {
  clients: any[],
  loading: boolean
}

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private http = inject( HttpClient )

  #stateClient = signal<State>({
    loading: true,
    clients: []
  });

  constructor() {
    // this.http.get()
  }

}
