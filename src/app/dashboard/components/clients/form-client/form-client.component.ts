import { CustomLabelDirective } from './../../../../shared/directives/customLabel.directive';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ClientService } from '../../../../services/client.service';

@Component({
  selector: 'app-form-client',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CustomLabelDirective
  ],
  templateUrl: './form-client.component.html',
  styleUrl: './form-client.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormClientComponent {

  public clientService = inject( ClientService )

  public formClient: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    surname: ['', [Validators.required, Validators.minLength(3)]],
    dni: ['', [Validators.required, Validators.minLength(5)]],
    email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$')]],
    phone: ['', [Validators.required, Validators.minLength(5)]],
    genre: ['male', [Validators.required]],
    photo: ['', [Validators.required]]
  })

  constructor(
    private fb: FormBuilder
  ){}

  onSave(): void {
    if( this.formClient.invalid ) {
      this.formClient.markAllAsTouched();
      return;
    };

    console.log(this.formClient.value)
    this.formClient.reset({ genre: 'male' });
  }
}
