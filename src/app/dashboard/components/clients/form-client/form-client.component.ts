import { CustomLabelDirective } from './../../../../shared/directives/customLabel.directive';
import { CommonModule } from '@angular/common';
import {ChangeDetectionStrategy, Component, inject, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ClientService } from '../../../../services/client.service';
import {ActivatedRoute} from "@angular/router";
import {switchMap} from "rxjs";
import {LoadingComponent} from "@shared/loading/loading.component";

@Component({
  selector: 'app-form-client',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CustomLabelDirective,
    LoadingComponent
  ],
  templateUrl: './form-client.component.html',
  styleUrl: './form-client.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormClientComponent implements OnInit {

  public clientService = inject( ClientService );
  private activatedRoute: ActivatedRoute = inject( ActivatedRoute );
  public showData: boolean = false;
  private clientId!: number | null;

  public formClient: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    surname: ['', [Validators.required, Validators.minLength(3)]],
    dni: ['', [Validators.required, Validators.minLength(5)]],
    email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$')]],
    password: ['', Validators.required],
    phone: ['', [Validators.required, Validators.minLength(5)]],
    genre: ['male', [Validators.required]],
    photo: ['', [Validators.required]]
  })

  constructor(
    private fb: FormBuilder
  ){
    this.activatedRoute.params.pipe(
      switchMap(({ id }) => {
        this.clientId = id;
        return this.clientService.getClient(+id)
      }) // Asegúrate de convertir el id a número
    ).subscribe(
      (client: any) => {
        if(client.data.email.length >= 1){
          this.showData = true;
          console.log('entro')
        }
        this.formClient.get('name')?.setValue(client.data.users.name)
        this.formClient.get('surname')?.setValue(client.data.users.surname)
        this.formClient.get('dni')?.setValue(client.data.users.dni)
        this.formClient.get('email')?.setValue(client.data.email)
        this.formClient.get('phone')?.setValue(client.data.phone)
        this.formClient.get('genre')?.setValue(client.data.users.genre)
        this.formClient.get('photo')?.setValue(client.data.users.photo)
        this.formClient.get('password')?.setValue(client.data.password)
      }
    );
  }

  ngOnInit() {
  }

  onSave(): void {
    if( this.formClient.invalid ) {
      this.formClient.markAllAsTouched();
      return;
    };

    if( this.clientId && +this.clientId !== 0 ){
      this.clientService.updateClient(+this.clientId!, this.formClient.value).subscribe( res => {
        console.log('se ha actualizado correctamente', res)
      })
    }else {
      this.clientService.createClient(this.formClient.value).subscribe( res => {
        console.log('se ha creado correctamente', res)
      });
    }

    this.formClient.reset({ genre: 'male' });
  }

  deleteClient(){
    if( this.clientId && +this.clientId !== 0 ){
      this.clientService.deleteClient( +this.clientId! ).subscribe(resp => {
        console.log(resp)
      })
    }
  }
}
