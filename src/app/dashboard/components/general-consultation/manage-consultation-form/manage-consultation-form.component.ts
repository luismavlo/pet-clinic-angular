import { CommonModule } from "@angular/common";
import {ChangeDetectionStrategy, Component, effect, inject} from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { CustomLabelDirective } from "@shared/directives/customLabel.directive";
import { find } from "rxjs";
import {Router} from "@angular/router";
import {GeneralConsultationService} from "../../../../services/general-consultation.service";
import {PetService} from "../../../../services/pet.service";
import {EmployeeService} from "../../../../services/employee.service";
import {ClientService} from "../../../../services/client.service";
import {LoadingComponent} from "@shared/loading/loading.component";

@Component({
  selector: 'app-manage-consultation-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CustomLabelDirective,
    LoadingComponent
  ],
  templateUrl: './manage-consultation-form.component.html',
  styleUrl: './manage-consultation-form.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ManageConsultationFormComponent {

  private router: Router = inject(Router);
  public generalConsultationService = inject(GeneralConsultationService);
  public petService = inject(PetService);
  public employeeService = inject(EmployeeService)
  public clientService = inject(ClientService)


  public formManageConsultation: FormGroup = this.fb.group({
    id: 0,
    pet_id: ['', [Validators.required]],
    schenduling_by: ['', [Validators.required]],
    assigned_to: ['', [Validators.required]],
    reason: ['', [Validators.required]],
    blood_pressure: ['', [Validators.required]],
    heart_rate: ['', [Validators.required]],
    breathing_frequency: ['', [Validators.required]],
    body_temperatura: ['', [Validators.required]],
    observations: ['', [Validators.required]],
  })

  constructor(
    private fb: FormBuilder
  ){
    this.petService.getPets()
    this.employeeService.getEmployees();
    this.clientService.getClients();
  }

  public generalConsultationEffect = effect(() => {
    console.log(this.generalConsultationService.generalConsultationSelected())
    this.formManageConsultation.patchValue({
      id: this.generalConsultationService.generalConsultationSelected().id || 0,
      pet_id: this.generalConsultationService.generalConsultationSelected().pet_id || 0,
      schenduling_by: this.generalConsultationService.generalConsultationSelected().schenduling_by || 0,
      assigned_to: this.generalConsultationService.generalConsultationSelected().assigned_to || 0,
      reason: this.generalConsultationService.generalConsultationSelected().reason || '',
      blood_pressure: this.generalConsultationService.generalConsultationSelected().blood_pressure || '',
      heart_rate: this.generalConsultationService.generalConsultationSelected().heart_rate || '',
      breathing_frequency: this.generalConsultationService.generalConsultationSelected().breathing_frequency || '',
      body_temperatura: this.generalConsultationService.generalConsultationSelected().body_temperatura || '',
      observations: this.generalConsultationService.generalConsultationSelected().observations || '',
    })
  })

  onSave(): void {
    if( this.formManageConsultation.invalid ) {
      this.formManageConsultation.markAllAsTouched();
      return;
    };

    if(this.formManageConsultation.value.id !== 0){
      this.generalConsultationService.updateGeneralConsultation(this.formManageConsultation.value.id, this.formManageConsultation.value).subscribe(resp => {
        console.log("actualizado", resp)
      })
    }

    this.router.navigate(['/dashboard/general-consultation'])
    console.log(this.formManageConsultation.value)
    this.formManageConsultation.reset();
  }

}

