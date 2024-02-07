import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-schedule-consultation',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './schedule-consultation.component.html',
  styleUrl: './schedule-consultation.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ScheduleConsultationComponent { }
