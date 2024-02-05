import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-more-information',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './more-information.component.html',
  styleUrl: './more-information.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MoreInformationComponent { }
