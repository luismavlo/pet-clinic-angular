import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-table-working-hours',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './table-working-hours.component.html',
  styleUrl: './table-working-hours.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableWorkingHoursComponent { }
