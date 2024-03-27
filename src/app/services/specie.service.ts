import { Injectable, signal, computed } from '@angular/core';
import { Specie } from '../interfaces/pet.interface';

@Injectable({
  providedIn: 'root'
})
export class SpecieService {

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
  
}
