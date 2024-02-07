import { CommonModule } from '@angular/common';
import { Input, inject } from '@angular/core'
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Client } from '../../../../interfaces/clients.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-card',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './client-card.component.html',
  styleUrl: './client-card.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientCardComponent { 

  @Input({ required: true }) client!: Client;

  private router = inject( Router );

  goToClientDetail(clientId: number){
    this.router.navigate([`/dashboard/client`, clientId])
  }


}
