import { FormGroup, Validators } from '@angular/forms';
import { CommonModule } from "@angular/common";
import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { CustomLabelDirective } from '@shared/directives/customLabel.directive';
import {Router} from "@angular/router";
import {WorkingHourService} from "../../../../services/working-hour.service";
import {ClientService} from "../../../../services/client.service";
import {GeneralConsultationService} from "../../../../services/general-consultation.service";
import {PetService} from "../../../../services/pet.service";
import {EmployeeService} from "../../../../services/employee.service";

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

  private router: Router = inject(Router);
  public generalConsultationService = inject(GeneralConsultationService)
  public petService = inject(PetService);
  public employeeService = inject(EmployeeService)
  public clientService = inject(ClientService)

  public formSchedule: FormGroup = this.fb.group({
    id: 0,
    client_id: ['', [Validators.required]],
    pet_id: ['', [Validators.required]],
    schenduling_by: ['', [Validators.required]],
    assigned_to: ['', [Validators.required]],
    reason: ['', [Validators.required, Validators.minLength(10)]]
  })

  constructor(
    private fb: FormBuilder
  ){
    this.petService.getPets()
    this.employeeService.getEmployees();
    this.clientService.getClients();
  }

  onSave(){
    if( this.formSchedule.invalid ) {
      this.formSchedule.markAllAsTouched();
      return;
    };

    this.generalConsultationService.createGeneralConsultation(this.formSchedule.value).subscribe(resp => {
      console.log("registro creado correctamente", resp)
    })
    this.generalConsultationService.getGeneralConsultations();

    this.router.navigate(['/dashboard/general-consultation'])
    this.formSchedule.reset();
  }

}
