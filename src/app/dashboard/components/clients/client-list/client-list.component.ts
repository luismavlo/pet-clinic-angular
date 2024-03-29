import { Client } from './../../../../interfaces/clients.interface';
import { CommonModule } from '@angular/common';
import {ChangeDetectionStrategy, Component, inject, OnInit, signal} from '@angular/core';
import { ClientCardComponent } from '../client-card/client-card.component';
import {ClientService} from "../../../../services/client.service";

@Component({
  selector: 'app-client-list',
  standalone: true,
  imports: [
    CommonModule,
    ClientCardComponent
  ],
  templateUrl: './client-list.component.html',
  styleUrl: './client-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientListComponent {

  public clientService = inject( ClientService );

  constructor() {
    this.clientService.getClients();
  }

}
