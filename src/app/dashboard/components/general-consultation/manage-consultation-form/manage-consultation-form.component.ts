import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { CustomLabelDirective } from "@shared/directives/customLabel.directive";
import { find } from "rxjs";

@Component({
  selector: 'app-manage-consultation-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CustomLabelDirective
  ],
  templateUrl: './manage-consultation-form.component.html',
  styleUrl: './manage-consultation-form.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ManageConsultationFormComponent {

  public formManageConsultation: FormGroup = this.fb.group({
    client_id: ['', [Validators.required]],
    pet_id: ['', [Validators.required]],
    schenduling_by: ['', [Validators.required]],
    assigned_to: ['', [Validators.required]],
    appointment_date: ['', [Validators.required]],
    reason: ['', [Validators.required]],
    blood_pressure: ['', [Validators.required]],
    heart_rate: ['', [Validators.required]],
    breathing_frequency: ['', [Validators.required]],
    body_temperature: ['', [Validators.required]],
    observations: ['', [Validators.required]],
  })

  constructor(
    private fb: FormBuilder
  ){}

  onSave(): void {
    if( this.formManageConsultation.invalid ) {
      this.formManageConsultation.markAllAsTouched();
      return;
    };

    console.log(this.formManageConsultation.value)
    this.formManageConsultation.reset();
  }

}

