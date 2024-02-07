import { CustomLabelDirective } from '@shared/directives/customLabel.directive';
import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";

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

  public formSpecie: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    photo: ['', [Validators.required, Validators.minLength(3)]],
    description: ['', [Validators.required, Validators.minLength(3)]],
  })

  constructor(
    private fb: FormBuilder
  ){}

  onSave(): void {
    if( this.formSpecie.invalid ) {
      this.formSpecie.markAllAsTouched();
      return;
    };

    console.log(this.formSpecie.value)
    this.formSpecie.reset();
  }

}
