import {computed, inject, Injectable, Signal, signal} from '@angular/core';
import {HttpClient} from "@angular/common/http";

interface State {
  generalConsultations: any[];
  loading: boolean
}

@Injectable({
  providedIn: 'root'
})
export class GeneralConsultationService {

  public baseURL: string  = 'http://localhost/api';
  private http = inject( HttpClient );

  #stateGeneralConsultation = signal<State>({
    loading: true,
    generalConsultations: []
  })

  public generalConsultations = computed(() => this.#stateGeneralConsultation().generalConsultations);
  public loading = computed(() => this.#stateGeneralConsultation().loading);

  #generalConsultationSelected? = signal<any>({});

  public generalConsultationSelected: Signal<any> = computed(() => {
    if(this.#stateGeneralConsultation !== undefined){
      return this.#stateGeneralConsultation();
    }
    return {}
  })

  constructor() { }

  setGeneralConsultation( generalConsultation: any ) {
    if( generalConsultation !== undefined ){
      this.#stateGeneralConsultation?.set(generalConsultation);
    }
  }

  createGeneralConsultation(data: any){
    return this.http.post(`${this.baseURL}/generalconsultation`, data)
  }

  getGeneralConsultations(){
    return this.http.get(`${this.baseURL}/generalconsultation`)
      .subscribe( (res: any) => {
        console.log(res.data.data)
        this.#stateGeneralConsultation.set({
          loading: false,
          generalConsultations: res.data.data
        })
      })
  }

  updateGeneralConsultation(id: number, data: any){
    return this.http.patch(`${this.baseURL}/generalconsultation/${id}`, data)
  }

}
