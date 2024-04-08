import {Injectable, signal, computed, inject} from '@angular/core';
import { WorkingHourState, WorkingHour } from '../interfaces/working-hour.interface';
import {HttpClient} from "@angular/common/http";


interface State {
  workingHours: WorkingHour[],
  loading: boolean
}
@Injectable({
  providedIn: 'root'
})
export class WorkingHourService {

  private baseURL: string = 'http://localhost/api';
  private http = inject( HttpClient );

  #stateWorkingHour = signal<State>({
    loading: true,
    workingHours: []
  })

  public workingHours = computed(() => this.#stateWorkingHour().workingHours);
  public loading = computed(() => this.#stateWorkingHour().loading);

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

  createWorkingHour(data: any) {
    return this.http.post(`${this.baseURL}/consultationschedule`, data)
  }

  getWorkingHours() {
    this.http.get(`${this.baseURL}/consultationschedule`)
      .subscribe((res: any) => {
        console.log(res)
        this.#stateWorkingHour.set({
          loading: false,
          workingHours: res.data.data
        })
      })
  }

  deleteWorkingHour(id: number) {
    return this.http.delete(`${this.baseURL}/consultationschedule/${id}`)
  }

}
