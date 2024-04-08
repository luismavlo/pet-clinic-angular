import { CommonModule } from "@angular/common";
import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {GeneralConsultationService} from "../../../../services/general-consultation.service";
import {LoadingComponent} from "@shared/loading/loading.component";

@Component({
  selector: 'app-appointment-consultation-list',
  standalone: true,
  imports: [
    CommonModule,
    LoadingComponent,
  ],
  templateUrl: './appointment-consultation-list.component.html',
  styleUrl: './appointment-consultation-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppointmentConsultationListComponent {

  public generalConsultationService = inject(GeneralConsultationService);

  constructor() {
    this.generalConsultationService.getGeneralConsultations();
  }

  selectAppointment( appointment: any ){
    this.generalConsultationService.setGeneralConsultation(appointment)
  }

}
