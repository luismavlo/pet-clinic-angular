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
      id: 1,
      name: 'Luis Miguel',
      surname: 'Avendaño Lozano',
      dni: '1091919234',
      photo: 'https://img.freepik.com/foto-gratis/hombre-moreno-positiva-brazos-cruzados_1187-5797.jpg',
      genre: 'male',
      email: 'luis@gmail.com',
      phone: '5645624'
    },
    {
      id: 2,
      name: 'Ana María',
      surname: 'González Pérez',
      dni: '2087654321',
      photo: 'https://img.freepik.com/foto-gratis/hombre-moreno-positiva-brazos-cruzados_1187-5797.jpg',
      genre: 'female',
      email: 'ana@gmail.com',
      phone: '9876543'
    },
    {
      id: 3,
      name: 'Carlos Rodríguez',
      surname: 'Ramírez Gómez',
      dni: '3056789123',
      photo: 'https://img.freepik.com/foto-gratis/hombre-joven-pensativo-traje-oscuro_1303-16078.jpg',
      genre: 'male',
      email: 'carlos@gmail.com',
      phone: '1234567'
    },
    {
      id: 4,
      name: 'María José',
      surname: 'Martínez Hernández',
      dni: '4087654321',
      photo: 'https://img.freepik.com/foto-gratis/hombre-moreno-positiva-brazos-cruzados_1187-5797.jpg',
      genre: 'female',
      email: 'maria@gmail.com',
      phone: '8765432'
    },
    {
      id: 5,
      name: 'Javier López',
      surname: 'García Pérez',
      dni: '5076543219',
      photo: 'https://img.freepik.com/foto-gratis/hombre-moreno-positiva-brazos-cruzados_1187-5797.jpg',
      genre: 'male',
      email: 'javier@gmail.com',
      phone: '7654321'
    },
    {
      id: 6,
      name: 'Laura Torres',
      surname: 'Sánchez Ramírez',
      dni: '6067891234',
      photo: 'https://img.freepik.com/foto-gratis/hombre-moreno-positiva-brazos-cruzados_1187-5797.jpg',
      genre: 'female',
      email: 'laura@gmail.com',
      phone: '2345678'
    },
    {
      id: 7,
      name: 'Alejandro',
      surname: 'Gómez Torres',
      dni: '7065432198',
      photo: 'https://img.freepik.com/foto-gratis/hombre-sonriente-feliz-vestido-camisa-cuadros-levantando-pulgar_171337-15258.jpg',
      genre: 'male',
      email: 'alejandro@gmail.com',
      phone: '3456789'
    },
    {
      id: 8,
      name: 'Isabel Rodríguez',
      surname: 'Santos Pérez',
      dni: '8054321987',
      photo: 'https://img.freepik.com/foto-gratis/mujer-joven-sonriente-lleva-blusa-colores-mirando-camara_273609-4072.jpg',
      genre: 'female',
      email: 'isabel@gmail.com',
      phone: '4567890'
    },
    {
      id: 9,
      name: 'Juan Carlos',
      surname: 'Hernández López',
      dni: '9043219876',
      photo: 'https://img.freepik.com/foto-gratis/hombre-joven-sonriente-camisa-cuadros_1368-26788.jpg',
      genre: 'male',
      email: 'juan@gmail.com',
      phone: '5678901'
    }
  ])
}
