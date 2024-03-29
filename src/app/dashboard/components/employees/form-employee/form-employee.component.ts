import { CommonModule } from "@angular/common";
import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { CustomLabelDirective } from "@shared/directives/customLabel.directive";
import {EmployeeService} from "../../../../services/employee.service";
import {ActivatedRoute} from "@angular/router";
import {switchMap} from "rxjs";

@Component({
  selector: 'app-form-employee',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CustomLabelDirective
  ],
  templateUrl: './form-employee.component.html',
  styleUrl: './form-employee.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormEmployeeComponent {

  public employeeService = inject( EmployeeService );
  private activatedRoute: ActivatedRoute = inject( ActivatedRoute );
  private updateEmployee: boolean = false;
  private employeeId!: number | null;

  public formEmployee: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    surname: ['', [Validators.required, Validators.minLength(3)]],
    dni: ['', [Validators.required, Validators.minLength(5)]],
    email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$')]],
    phone: ['', [Validators.required, Validators.minLength(5)]],
    genre: ['male', [Validators.required]],
    photo: ['', [Validators.required]],
    occupation: ['', [Validators.required, Validators.minLength(3)]],
    gross_salary: [0, [Validators.required, Validators.min(0)]],
    password: ['', [Validators.required, Validators.minLength(7)]]
  })

  constructor(
    private fb: FormBuilder
  ){
    this.activatedRoute.params.pipe(
      switchMap(({ id }) => {
        this.employeeId = id;
        return this.employeeService.getEmployee(+id);
      })
    ).subscribe((resp: any) => {
      this.updateEmployee = true;
      this.formEmployee.get('name')?.setValue(resp.data.users.name)
      this.formEmployee.get('surname')?.setValue(resp.data.users.surname)
      this.formEmployee.get('dni')?.setValue(resp.data.users.dni)
      this.formEmployee.get('email')?.setValue(resp.data.email)
      this.formEmployee.get('phone')?.setValue(resp.data.phone)
      this.formEmployee.get('genre')?.setValue(resp.data.users.genre)
      this.formEmployee.get('photo')?.setValue(resp.data.users.photo)
      this.formEmployee.get('occupation')?.setValue(resp.data.occupation)
      this.formEmployee.get('gross_salary')?.setValue(resp.data.gross_salary)
      this.formEmployee.get('password')?.setValue(resp.data.password)
    })
  }

  onSave(): void {
    if( this.formEmployee.invalid ) {
      this.formEmployee.markAllAsTouched();
      return;
    };

    if( this.employeeId && +this.employeeId !== 0 ){
      this.employeeService.updateEmployee(+this.employeeId!, this.formEmployee.value).subscribe(res => {
        console.log('se ha actualizado correctamente', res)
      })
    }else {
      this.employeeService.createEmployee(this.formEmployee.value).subscribe( res => {
        console.log('se ha creado correctamente', res)
      })
    }

    this.formEmployee.reset({ genre: 'male' });
  }

  deleteEmployee(){
    if( this.employeeId && +this.employeeId !== 0 ){
      this.employeeService.deleteEmployee( +this.updateEmployee! ).subscribe( resp => {
        console.log(resp)
      })
    }
  }

}
