import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomLabelDirective } from './../../../../shared/directives/customLabel.directive';
import { CommonModule } from "@angular/common";
import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {PetService} from "../../../../services/pet.service";
import {ActivatedRoute, Router} from "@angular/router";
import {switchMap} from "rxjs";
import {ClientService} from "../../../../services/client.service";
import {SpecieService} from "../../../../services/specie.service";

@Component({
  selector: 'app-form-pet',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CustomLabelDirective,
  ],
  templateUrl: './form-pet.component.html',
  styleUrl: './form-pet.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormPetComponent {

  public petService = inject( PetService );
  public clientService = inject( ClientService );
  public specieService = inject( SpecieService );
  private router = inject(Router)

  private activatedRoute: ActivatedRoute = inject( ActivatedRoute );
  public petId!: number | null;

  public formPet: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    birthdate: ['', [Validators.required]],
    race: ['', [Validators.required, Validators.minLength(3)]],
    photo: ['', [Validators.required, Validators.minLength(3)]],
    specie_id: [Validators.required],
    client_id: [Validators.required]
  })

  constructor(
    private fb: FormBuilder
  ){
    this.clientService.getClients();
    this.specieService.getSpecies();
    this.activatedRoute.params.pipe(
      switchMap(({id}) => {
        this.petId = id;
        return this.petService.getPet(+id);
      })
    ).subscribe( (pet: any) => {
      console.log(pet.data)
      this.formPet.get('name')?.setValue(pet.data.name)
      this.formPet.get('birthdate')?.setValue(pet.data.birthdate)
      this.formPet.get('race')?.setValue(pet.data.race)
      this.formPet.get('photo')?.setValue(pet.data.photo)
      this.formPet.get('specie_id')?.setValue(pet.data.specie_id)
      this.formPet.get('client_id')?.setValue(pet.data.client_id)
    })
  }

  onSave(): void {
    if( this.formPet.invalid ) {
      this.formPet.markAllAsTouched();
      return;
    };

    if(this.petId && +this.petId !== 0){
      this.petService.updatePet(+this.petId!, this.formPet.value).subscribe( res => {
        console.log('se ha actualizado correctamente', res)

      })
    }else {
      this.petService.createPet(this.formPet.value).subscribe(res => {
        console.log('se ha creado correctamente', res)
      })
    }

    this.formPet.reset();
    this.router.navigate(['/dashboard/pets'])
  }

  deletePet(){
    if(this.petId && +this.petId !== 0){
      this.petService.deletePet( +this.petId ).subscribe(res => {
        console.log(res)
      })
    }
  }

}
