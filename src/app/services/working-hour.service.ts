import { Injectable, signal, computed } from '@angular/core';
import { WorkingHour } from '../interfaces/working-hour.interface';

@Injectable({
  providedIn: 'root'
})
export class WorkingHourService {

  #workingHourSelected? = signal<any>({});

  public workingHourSelected = computed(() => {
    if(this.#workingHourSelected !== undefined ){
      return this.#workingHourSelected();
    }
    return {}
  })

  constructor() { }

  setWorkingHourSelected( workingHour: WorkingHour | undefined ) {
    if( workingHour !== undefined){
      this.#workingHourSelected?.set(workingHour)
    }
  }

}
