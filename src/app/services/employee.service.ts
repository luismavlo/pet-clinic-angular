import {computed, inject, Injectable, signal} from '@angular/core';
import {Employee} from "../interfaces/employee.interface";
import {HttpClient} from "@angular/common/http";

interface State {
  employees: Employee[],
  loading: boolean
}

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseURL: string = 'http://localhost/api'
  private http = inject( HttpClient )

  #stateEmployee = signal<State>({
    loading: true,
    employees: []
  })

  public employees = computed(() => this.#stateEmployee().employees)
  public loading = computed(() => this.#stateEmployee().loading)

  createEmployee(data: any){
    return this.http.post(`${this.baseURL}/employee`, data)
  }

  getEmployees(){
    this.http.get(`${this.baseURL}/employee`)
      .subscribe( (res: any) => {
        console.log(res)
        this.#stateEmployee.set({
          loading: false,
          employees: res.data.data
        })
      })
  }

  getEmployee(id: number){
    return this.http.get(`${this.baseURL}/employee/${id}`)
  }

  updateEmployee(id: number, data: any){
    return this.http.patch(`${this.baseURL}/employee/${id}`, data)
  }

  deleteEmployee(id: number){
    return this.http.delete(`${this.baseURL}/employee/${id}`)
  }

}
