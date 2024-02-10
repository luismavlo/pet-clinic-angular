import { FormGroup, Validators } from '@angular/forms';
import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { CustomLabelDirective } from '@shared/directives/customLabel.directive';

@Component({
  selector: 'app-form-schedule',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CustomLabelDirective
  ],
  templateUrl: './form-schedule.component.html',
  styleUrl: './form-schedule.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormScheduleComponent {

  public formSchedule: FormGroup = this.fb.group({
    client_id: ['', [Validators.required]],
    pet_id: ['', [Validators.required]],
    schenduling_by: ['', [Validators.required]],
    assigned_to: ['', [Validators.required]],
    reason: ['', [Validators.required, Validators.minLength(10)]]
  })

  constructor(
    private fb: FormBuilder
  ){}

  onSave(){
    if( this.formSchedule.invalid ) {
      this.formSchedule.markAllAsTouched();
      return;
    };

    console.log(this.formSchedule.value)
    this.formSchedule.reset();
  }
 
}
