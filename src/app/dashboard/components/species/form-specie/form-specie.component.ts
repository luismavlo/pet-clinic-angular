import { CustomLabelDirective } from '@shared/directives/customLabel.directive';
import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, inject, effect } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { SpecieService } from '../../../../services/specie.service';

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

  public specieService = inject(SpecieService)

  public formSpecie: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    photo: ['', [Validators.required, Validators.minLength(3)]],
    descripcion: ['', [Validators.required, Validators.minLength(3)]],
  })

  constructor(
    private fb: FormBuilder
  ){}

  public specieSelectedEffect = effect(() => {
    this.formSpecie.patchValue({
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
    this.formSpecie.reset();
  }



}
