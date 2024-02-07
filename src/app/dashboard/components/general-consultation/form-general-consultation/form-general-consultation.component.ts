import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-form-general-consultation',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './form-general-consultation.component.html',
  styleUrl: './form-general-consultation.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormGeneralConsultationComponent { }
