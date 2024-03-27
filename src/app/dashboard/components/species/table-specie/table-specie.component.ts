import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Specie } from "../../../../interfaces/pet.interface";
import { SpecieService } from "../../../../services/specie.service";

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
export class TableSpecieComponent {

  public specieService = inject( SpecieService )

  public species: Specie[] = [{
    "id": 1,
    "name": "gato",
    "descripcion": "mau",
    "photo": "no hay",
    "remember_token": null,
    "created_at": null,
    "updated_at": null
  }]

  selectSpecie( specie: Specie ){
    this.specieService.setSpecieSelected( specie );
  }

}
