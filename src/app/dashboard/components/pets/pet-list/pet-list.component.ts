import { PetCardComponent } from './../pet-card/pet-card.component';
import { CommonModule } from "@angular/common";
import {ChangeDetectionStrategy, Component, inject, signal} from '@angular/core';
import { Pet } from '../../../../interfaces/pet.interface';
import {PetService} from "../../../../services/pet.service";

@Component({
  selector: 'app-pet-list',
  standalone: true,
  imports: [
    CommonModule,
    PetCardComponent
  ],
  templateUrl: './pet-list.component.html',
  styleUrl: './pet-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PetListComponent {

  public petService = inject(PetService)

  constructor() {
    this.petService.getPets();
  }

}
