import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-form-pet',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './form-pet.component.html',
  styleUrl: './form-pet.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormPetComponent { }
