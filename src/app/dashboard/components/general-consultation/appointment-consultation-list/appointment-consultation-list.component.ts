import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-appointment-consultation-list',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './appointment-consultation-list.component.html',
  styleUrl: './appointment-consultation-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppointmentConsultationListComponent { }
