import { HttpClient } from '@angular/common/http';
import {Injectable, signal, inject, computed} from '@angular/core';
import {Client, ClientPost} from "../interfaces/clients.interface";

interface State {
  clients: Client[],
  loading: boolean
}

interface StateOne {
  client: Client | null,
  loading: boolean
}

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private baseURL: string = 'http://localhost/api'
  private http = inject( HttpClient )

  #stateClient = signal<State>({
    loading: true,
    clients: []
  });

  #stateOneClient = signal<StateOne>({
    loading: true,
    client: null
  })

  public clients = computed(() => this.#stateClient().clients)
  public loading = computed(() => this.#stateClient().loading)

  public client = computed(() => this.#stateOneClient().client)
  public loadingClient = computed(() => this.#stateOneClient().loading)

  constructor() {
    // this.http.get()
  }

  createClient(data: ClientPost){
    return this.http.post(`${this.baseURL}/client`, data)
  }

  getClients(){
    this.http.get(`${this.baseURL}/client`)
      .subscribe( (res:any) => {
        console.log(res.data.data)
        this.#stateClient.set({
          loading: false,
          clients: res.data.data
        })
      })
  }

  getClient(id: number){
    return this.http.get(`${this.baseURL}/client/${id}`)
  }

  updateClient(id: number, data: any){
    return this.http.patch(`${this.baseURL}/client/${id}`, data )
  }

  deleteClient(id: number) {
    return this.http.delete(`${this.baseURL}/client/${id}`)
  }

}
