import { LoadingComponent } from './../../../shared/loading/loading.component';
import { Router } from '@angular/router';
import { ClientListComponent } from './../../components/clients/client-list/client-list.component';
import { FormClientComponent } from './../../components/clients/form-client/form-client.component';
import { SectionTitleComponent } from './../../components/commons/section-title/section-title.component';
import { Component, inject } from '@angular/core';
import {ClientService} from "../../../services/client.service";

@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [
    SectionTitleComponent,
    FormClientComponent,
    ClientListComponent,
    LoadingComponent
  ],
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.css'
})
export default class ClientsComponent {

  private router = inject( Router );
  public clientService = inject( ClientService );

  goToClientDetail(clientId: number){
    this.router.navigate([`/dashboard/client`, clientId])
  }

  constructor() {
    this.clientService.getClients();
  }

}
