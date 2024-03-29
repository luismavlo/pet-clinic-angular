import {computed, inject, Injectable, signal} from '@angular/core';
import {Pet} from "../interfaces/pet.interface";
import {HttpClient} from "@angular/common/http";
import {ClientPost} from "../interfaces/clients.interface";

interface State {
  pets: Pet[],
  loading: boolean
}

@Injectable({
  providedIn: 'root'
})
export class PetService {

  private baseURL: string = 'http://localhost/api'
  private http = inject( HttpClient )

  #statePet = signal<State>({
    pets: [],
    loading: true
  })

  public pets = computed(() => this.#statePet().pets );
  public loading = computed(() => this.#statePet().loading)

  constructor() { }

  createPet(data: any){
    return this.http.post(`${this.baseURL}/pet`, data)
  }

  getPets(){
    this.http.get(`${this.baseURL}/pet`)
      .subscribe( (res:any) => {
        console.log(res)
        this.#statePet.set({
          loading: false,
          pets: res.data.data
        })
      })
  }

  getPet(id: number){
    return this.http.get(`${this.baseURL}/pet/${id}`)
  }

  updatePet(id: number, data: any){
    return this.http.patch(`${this.baseURL}/pet/${id}`, data )
  }

  deletePet(id: number) {
    return this.http.delete(`${this.baseURL}/pet/${id}`)
  }

}
