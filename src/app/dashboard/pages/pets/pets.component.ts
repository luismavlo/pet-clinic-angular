import { PetListComponent } from './../../components/pets/pet-list/pet-list.component';
import { Component } from '@angular/core';
import { SectionTitleComponent } from '../../components/commons/section-title/section-title.component';
import { inject } from '@angular/core'
import { Router } from '@angular/router';
import { LoadingComponent } from '@shared/loading/loading.component';
@Component({
  selector: 'app-pets',
  standalone: true,
  imports: [
    SectionTitleComponent,
    PetListComponent,
    LoadingComponent
  ],
  templateUrl: './pets.component.html',
  styleUrl: './pets.component.css'
})
export default class PetsComponent {
  private router = inject( Router );

  goToPetDetail(petId: number){
    this.router.navigate([`/dashboard/pet`, petId])
  }
}
