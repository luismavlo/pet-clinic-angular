import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { CustomLabelDirective } from "@shared/directives/customLabel.directive";

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
  ){}

  onSave(): void {
    if( this.formEmployee.invalid ) {
      this.formEmployee.markAllAsTouched();
      return;
    };

    console.log(this.formEmployee.value)
    this.formEmployee.reset({ genre: 'male' });
  }

}
