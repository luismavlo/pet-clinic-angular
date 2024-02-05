import { PetCardComponent } from './../pet-card/pet-card.component';
import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { Pet } from '../../../../interfaces/pet.interface';

@Component({
  selector: 'app-pet-list',
  standalone: true,
  imports: [
    CommonModule,
    PetCardComponent
  ],
  templateUrl: './pet-list.component.html',
  styleUrl: './pet-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PetListComponent { 

  public pets = signal<Pet[]>([
    {
      id: 1,
      photo: 'https://media.istockphoto.com/id/1338954116/es/foto/retrato-de-perro-afuera-en-el-parque-en-verano.jpg?s=612x612&w=0&k=20&c=L9gqLxUZKVklirqHBGt_dNA5uN2Q2NLG-5QAwCneh3g=',
      name: 'budy',
      birthdate: '2020-10-10',
      race: 'husky',
      specie: {
        id: 1,
        name: 'perro',
        description: 'Los perros, miembros leales y queridos de la familia Canidae, conforman una especie que ha compartido una larga historia de compañía y colaboración con los seres humanos. Su diversidad en tamaños, formas y temperamentos hace que esta especie sea verdaderamente extraordinaria. Desde los imponentes pastores alemanes hasta los juguetones dachshunds, cada raza aporta sus características únicas a la rica paleta canina.'
      }
    },
    {
      id: 2,
      photo: 'https://media.istockphoto.com/id/1338954116/es/foto/retrato-de-perro-afuera-en-el-parque-en-verano.jpg?s=612x612&w=0&k=20&c=L9gqLxUZKVklirqHBGt_dNA5uN2Q2NLG-5QAwCneh3g=',
      name: 'Max',
      birthdate: '2019-05-15',
      race: 'Labrador',
      specie: {
        id: 1,
        name: 'perro',
        description: 'Los perros, miembros leales y queridos de la familia Canidae, conforman una especie que ha compartido una larga historia de compañía y colaboración con los seres humanos. Su diversidad en tamaños, formas y temperamentos hace que esta especie sea verdaderamente extraordinaria. Desde los imponentes pastores alemanes hasta los juguetones dachshunds, cada raza aporta sus características únicas a la rica paleta canina.'
      }
    },
    {
      id: 3,
      photo: 'https://media.istockphoto.com/id/1338954116/es/foto/retrato-de-perro-afuera-en-el-parque-en-verano.jpg?s=612x612&w=0&k=20&c=L9gqLxUZKVklirqHBGt_dNA5uN2Q2NLG-5QAwCneh3g=',
      name: 'Luna',
      birthdate: '2018-12-01',
      race: 'Golden Retriever',
      specie: {
        id: 1,
        name: 'perro',
        description: 'Los perros, miembros leales y queridos de la familia Canidae, conforman una especie que ha compartido una larga historia de compañía y colaboración con los seres humanos. Su diversidad en tamaños, formas y temperamentos hace que esta especie sea verdaderamente extraordinaria. Desde los imponentes pastores alemanes hasta los juguetones dachshunds, cada raza aporta sus características únicas a la rica paleta canina.'
      }
    },
    {
      id: 4,
      photo: 'https://media.istockphoto.com/id/1338954116/es/foto/retrato-de-perro-afuera-en-el-parque-en-verano.jpg?s=612x612&w=0&k=20&c=L9gqLxUZKVklirqHBGt_dNA5uN2Q2NLG-5QAwCneh3g=',
      name: 'Rocky',
      birthdate: '2020-02-28',
      race: 'Bulldog',
      specie: {
        id: 1,
        name: 'perro',
        description: 'Los perros, miembros leales y queridos de la familia Canidae, conforman una especie que ha compartido una larga historia de compañía y colaboración con los seres humanos. Su diversidad en tamaños, formas y temperamentos hace que esta especie sea verdaderamente extraordinaria. Desde los imponentes pastores alemanes hasta los juguetones dachshunds, cada raza aporta sus características únicas a la rica paleta canina.'
      }
    },
    {
      id: 5,
      photo: 'https://media.istockphoto.com/id/1338954116/es/foto/retrato-de-perro-afuera-en-el-parque-en-verano.jpg?s=612x612&w=0&k=20&c=L9gqLxUZKVklirqHBGt_dNA5uN2Q2NLG-5QAwCneh3g=',
      name: 'Coco',
      birthdate: '2019-08-10',
      race: 'Dachshund',
      specie: {
        id: 1,
        name: 'perro',
        description: 'Los perros, miembros leales y queridos de la familia Canidae, conforman una especie que ha compartido una larga historia de compañía y colaboración con los seres humanos. Su diversidad en tamaños, formas y temperamentos hace que esta especie sea verdaderamente extraordinaria. Desde los imponentes pastores alemanes hasta los juguetones dachshunds, cada raza aporta sus características únicas a la rica paleta canina.'
      }
    },
    {
      id: 6,
      photo: 'https://media.istockphoto.com/id/1338954116/es/foto/retrato-de-perro-afuera-en-el-parque-en-verano.jpg?s=612x612&w=0&k=20&c=L9gqLxUZKVklirqHBGt_dNA5uN2Q2NLG-5QAwCneh3g=',
      name: 'Lucky',
      birthdate: '2020-11-15',
      race: 'Shih Tzu',
      specie: {
        id: 1,
        name: 'perro',
        description: 'Los perros, miembros leales y queridos de la familia Canidae, conforman una especie que ha compartido una larga historia de compañía y colaboración con los seres humanos. Su diversidad en tamaños, formas y temperamentos hace que esta especie sea verdaderamente extraordinaria. Desde los imponentes pastores alemanes hasta los juguetones dachshunds, cada raza aporta sus características únicas a la rica paleta canina.'
      }
    }
  ])
}
