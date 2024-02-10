import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { CustomLabelDirective } from "@shared/directives/customLabel.directive";

@Component({
  selector: 'app-form-working-hours',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CustomLabelDirective
  ],
  templateUrl: './form-working-hours.component.html',
  styleUrl: './form-working-hours.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormWorkingHoursComponent {

  public formWorkingHour: FormGroup = this.fb.group({
    start_date: ['', [Validators.required]],
    end_date: ['', [Validators.required]],
    appointment_duration: ['', [Validators.required]],
    shift_duration: ['', [Validators.required]],
    start_hour: ['', [Validators.required]],
    end_hour: ['', [Validators.required]],
    employee_id: ['', [Validators.required]],
  })

  constructor(
    private fb: FormBuilder
  ){}

  onSave(): void {
    if( this.formWorkingHour.invalid ) {
      this.formWorkingHour.markAllAsTouched();
      return;
    };

    console.log(this.formWorkingHour.value)
    this.formWorkingHour.reset();
  }

}
