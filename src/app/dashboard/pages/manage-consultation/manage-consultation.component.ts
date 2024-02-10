import { AppointmentConsultationListComponent } from './../../components/general-consultation/appointment-consultation-list/appointment-consultation-list.component';
import { ManageConsultationFormComponent } from './../../components/general-consultation/manage-consultation-form/manage-consultation-form.component';
import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SectionTitleComponent } from "../../components/commons/section-title/section-title.component";

@Component({
  selector: 'app-manage-consultation',
  standalone: true,
  imports: [
    CommonModule,
    SectionTitleComponent,
    ManageConsultationFormComponent,
    AppointmentConsultationListComponent,
  ],
  templateUrl: './manage-consultation.component.html',
  styleUrl: './manage-consultation.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ManageConsultationComponent { }
