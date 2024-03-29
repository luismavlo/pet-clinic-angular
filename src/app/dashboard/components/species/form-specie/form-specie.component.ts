import { CustomLabelDirective } from '@shared/directives/customLabel.directive';
import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, inject, effect } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { SpecieService } from '../../../../services/specie.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-form-specie',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CustomLabelDirective,
  ],
  templateUrl: './form-specie.component.html',
  styleUrl: './form-specie.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormSpecieComponent {

  private router: Router = inject(Router);
  public specieService = inject(SpecieService)

  public formSpecie: FormGroup = this.fb.group({
    id: 0,
    name: ['', [Validators.required, Validators.minLength(3)]],
    photo: ['', [Validators.required, Validators.minLength(3)]],
    descripcion: ['', [Validators.required, Validators.minLength(3)]],
  })

  constructor(
    private fb: FormBuilder
  ){}

  public specieSelectedEffect = effect(() => {
    this.formSpecie.patchValue({
      id: this.specieService.specieSelected().id || 0,
      name: this.specieService.specieSelected().name || '',
      photo: this.specieService.specieSelected().photo || '',
      descripcion: this.specieService.specieSelected().descripcion || '',
    })
  })

  onSave(): void {
    if( this.formSpecie.invalid ) {
      this.formSpecie.markAllAsTouched();
      return;
    };
    console.log(this.formSpecie.value)

    if( +this.formSpecie.get('id')?.value !== 0 ){
      this.specieService.updateSpecie(+this.formSpecie.get('id')?.value, this.formSpecie.value).subscribe(resp => {
        console.log("se ha actualizado correctamente", resp)
      })
    }else{
      this.specieService.createSpecie(this.formSpecie.value).subscribe(resp => {
        console.log("se ha creado correctamente", resp)
      })
    }

    this.specieService.getSpecies();
    this.formSpecie.reset();
  }

  deselect(){
    this.specieService.specieSelected().id = 0;
    this.specieService.specieSelected().name = '';
    this.specieService.specieSelected().photo = '';
    this.specieService.specieSelected().descripcion = '';

    this.router.navigate(['/dashboard/pets']);


    this.formSpecie.reset();
  }





}
