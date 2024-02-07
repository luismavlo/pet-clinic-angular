import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomLabelDirective } from './../../../../shared/directives/customLabel.directive';
import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component } from '@angular/core';

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
  ){}

  onSave(): void {
    if( this.formPet.invalid ) {
      this.formPet.markAllAsTouched();
      return;
    };

    console.log(this.formPet.value)
    this.formPet.reset();
  }

}
