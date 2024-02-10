import { FormScheduleComponent } from './../../components/schedule-consultation/form-schedule/form-schedule.component';
import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SectionTitleComponent } from "../../components/commons/section-title/section-title.component";

@Component({
  selector: 'app-schedule-consultation',
  standalone: true,
  imports: [
    CommonModule,
    SectionTitleComponent,
    FormScheduleComponent
  ],
  templateUrl: './schedule-consultation.component.html',
  styleUrl: './schedule-consultation.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ScheduleConsultationComponent { }
