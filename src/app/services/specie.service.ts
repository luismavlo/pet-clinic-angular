import {Injectable, signal, computed, inject} from '@angular/core';
import { Specie } from '../interfaces/pet.interface';
import {HttpClient} from "@angular/common/http";

interface State {
  species: Specie[];
  loading: boolean
}

@Injectable({
  providedIn: 'root'
})
export class SpecieService {

  private baseURL: string = 'http://localhost/api';
  private http = inject( HttpClient );

  #stateSpecie = signal<State>({
    loading: true,
    species: []
  })

  public species = computed(() => this.#stateSpecie().species);
  public loading = computed(() => this.#stateSpecie().loading);

  #specieSelected? = signal<any>({});

  public specieSelected = computed(() => {
    if(this.#specieSelected !== undefined ){
      return this.#specieSelected()
    }
    return {};
  })

  constructor() { }



  setSpecieSelected(specie: Specie | undefined) {
    if (specie !== undefined) {
      this.#specieSelected?.set(specie);
    }
  }

  createSpecie(data: any){
    return this.http.post(`${this.baseURL}/specie`, data)
  }

  getSpecies(){
    this.http.get(`${this.baseURL}/specie`)
      .subscribe((res: any) => {
        this.#stateSpecie.set({
          loading: false,
          species: res.data.data
        })
      })
  }

  getSpecie(id: number){
    return this.http.get(`${this.baseURL}/specie/${id}`);
  }

  updateSpecie(id: number, data: any){
    return this.http.patch(`${this.baseURL}/specie/${id}`, data )
  }

  deleteSpecie(id: number) {
    return this.http.delete(`${this.baseURL}/specie/${id}`)
  }



}
