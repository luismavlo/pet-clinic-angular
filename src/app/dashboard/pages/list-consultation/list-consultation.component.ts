import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-list-consultation',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './list-consultation.component.html',
  styleUrl: './list-consultation.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ListConsultationComponent { }
