import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-manage-consultation',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './manage-consultation.component.html',
  styleUrl: './manage-consultation.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ManageConsultationComponent { }
