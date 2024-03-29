import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Specie } from "../../../../interfaces/pet.interface";
import { SpecieService } from "../../../../services/specie.service";
import {Router} from "@angular/router";
import {LoadingComponent} from "@shared/loading/loading.component";

@Component({
  selector: 'app-table-specie',
  standalone: true,
  imports: [
    CommonModule,
    LoadingComponent
  ],
  templateUrl: './table-specie.component.html',
  styleUrl: './table-specie.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableSpecieComponent {

  public specieService = inject( SpecieService )
  private router: Router = inject(Router);

  constructor() {
    this.specieService.getSpecies()
  }

  selectSpecie( specie: Specie ){
    this.specieService.setSpecieSelected( specie );
  }

  deleteSpecie( specieId: number ){
    this.specieService.deleteSpecie(specieId).subscribe(resp => {
      console.log("eliminado", resp)
    });
    this.router.navigate(['/dashboard/pets'])
  }

}
