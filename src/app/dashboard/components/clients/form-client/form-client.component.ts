import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-form-client',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './form-client.component.html',
  styleUrl: './form-client.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormClientComponent { }
