import { PetCardComponent } from './../pet-card/pet-card.component';
import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { Pet } from '../../../../interfaces/pet.interface';

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

  public pets = signal<Pet[]>([
    {
      "id":2,
      "client_id":1,
      "photo":"NDD",
      "name":"sarnosito",
      "birthdate":"2010-10-10",
      "race":"PASTOR",
      "specie_id":1,
      "remember_token":null,
      "created_at":"2024-02-09T19:53:57.000000Z",
      "updated_at":"2024-02-09T19:53:57.000000Z",
      "specie":{
         "id":1,
         "name":"gato",
         "descripcion":"mau",
         "photo":"no hay",
         "remember_token":null,
         "created_at":null,
         "updated_at":null
      },
      "client":{
         "id":1,
         "user_id":1,
         "phone":"45456",
         "email":"NILXON",
         "password":"123",
         "remember_token":null,
         "created_at":null,
         "updated_at":"2024-02-09T18:22:08.000000Z"
      }
   }
  ])
}
