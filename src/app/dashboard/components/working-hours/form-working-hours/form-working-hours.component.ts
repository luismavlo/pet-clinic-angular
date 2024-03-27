import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, inject, effect } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { CustomLabelDirective } from "@shared/directives/customLabel.directive";
import { WorkingHourService } from "../../../../services/working-hour.service";

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

  public workingHourService = inject(WorkingHourService)

  public formWorkingHour: FormGroup = this.fb.group({
    start_date: ['', [Validators.required]],
    end_date: ['', [Validators.required]],
    appointment_duration: [0, [Validators.required]],
    shift_duration: [0, [Validators.required]],
    start_hour: ['', [Validators.required]],
    end_hour: ['', [Validators.required]],
    employee_id: [0, [Validators.required]],
  })

  constructor(
    private fb: FormBuilder
  ){}

  public workingHourSelectedEffect = effect(() => {
    this.formWorkingHour.patchValue({
      start_date: this.workingHourService.workingHourSelected().start_date || '',
      end_date: this.workingHourService.workingHourSelected().end_date || '',
      appointment_duration: this.workingHourService.workingHourSelected().appointment_duration || 0,
      shift_duration: this.workingHourService.workingHourSelected().shift_duration || 0,
      start_hour: this.workingHourService.workingHourSelected().start_hour || '',
      end_hour: this.workingHourService.workingHourSelected().end_hour || '',
      employee_id: this.workingHourService.workingHourSelected().employee_id || 0,
    })
  })

  onSave(): void {
    if( this.formWorkingHour.invalid ) {
      this.formWorkingHour.markAllAsTouched();
      return;
    };

    console.log(this.formWorkingHour.value)
    this.formWorkingHour.reset();
  }

}
