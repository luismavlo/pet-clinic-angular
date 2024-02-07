import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-table-specie',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './table-specie.component.html',
  styleUrl: './table-specie.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableSpecieComponent { }
