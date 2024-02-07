import { CommonModule } from '@angular/common';
import { Input } from '@angular/core'
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-section-title',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './section-title.component.html',
  styleUrl: './section-title.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SectionTitleComponent {

  @Input({ required: true }) title: string = '';

}
