import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-specie-detail',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './specie-detail.component.html',
  styleUrl: './specie-detail.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class SpecieDetailComponent { }
