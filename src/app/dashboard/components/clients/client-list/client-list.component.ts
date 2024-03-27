import { Client } from './../../../../interfaces/clients.interface';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ClientCardComponent } from '../client-card/client-card.component';

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
  public clients = signal<Client[]>([
    {
      "id": 1,
      "user_id": 1,
      "phone": "45456",
      "email": "NILXON",
      "password": "123",
      "remember_token": null,
      "created_at": null,
      "updated_at": "2024-02-09T18:22:08.000000Z",
      "users": {
        "id": 1,
        "name": "NILFER",
        "surname": "CFERN",
        "dni": "45",
        "genre": "M",
        "photo": "NO HAY",
        "created_at": null,
        "updated_at": null
      }
    },
    {
      "id": 3,
      "user_id": 1,
      "phone": "30412",
      "email": "ROBERT",
      "password": "12345",
      "remember_token": null,
      "created_at": "2024-02-09T17:17:39.000000Z",
      "updated_at": "2024-02-09T17:17:39.000000Z",
      "users": {
        "id": 1,
        "name": "NILFER",
        "surname": "CFERN",
        "dni": "45",
        "genre": "M",
        "photo": "NO HAY",
        "created_at": null,
        "updated_at": null
      }
    }
  ])
}
