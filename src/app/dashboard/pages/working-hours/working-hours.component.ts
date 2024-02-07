import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-working-hours',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './working-hours.component.html',
  styleUrl: './working-hours.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class WorkingHoursComponent { }
