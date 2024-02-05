import { Pet } from './../../../../interfaces/pet.interface';
import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, Input, inject } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-pet-card',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './pet-card.component.html',
  styleUrl: './pet-card.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PetCardComponent {

  @Input() pet!: Pet;

  private router = inject( Router );

  goToPetDetail(petId: number){
    this.router.navigate([`/dashboard/pet`, petId])
  }

}
