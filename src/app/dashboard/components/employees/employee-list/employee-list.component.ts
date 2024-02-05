import { EmployeeCardComponent } from './../employee-card/employee-card.component';
import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { signal } from '@angular/core'
import { Employee } from "../../../../interfaces/employee.interface";

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [
    CommonModule,
    EmployeeCardComponent,
  ],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeListComponent {

  public employees = signal<Employee[]>([
    {
      id: 1,
      name: 'Luis Miguel',
      surname: 'Avendaño Lozano',
      dni: '1091919234',
      photo: 'https://img.freepik.com/foto-gratis/hombre-moreno-positiva-brazos-cruzados_1187-5797.jpg',
      genre: 'male',
      email: 'luis@gmail.com',
      phone: '5645624',
      occupation: 'Empleado',
      gross_salary: 50000
    },
    {
      id: 2,
      name: 'Ana María',
      surname: 'González Pérez',
      dni: '2087654321',
      photo: 'https://img.freepik.com/foto-gratis/hombre-moreno-positiva-brazos-cruzados_1187-5797.jpg',
      genre: 'female',
      email: 'ana@gmail.com',
      phone: '9876543',
      occupation: 'Administrativo',
      gross_salary: 60000
    },
    {
      id: 3,
      name: 'Carlos Rodríguez',
      surname: 'Ramírez Gómez',
      dni: '3056789123',
      photo: 'https://img.freepik.com/foto-gratis/hombre-joven-pensativo-traje-oscuro_1303-16078.jpg',
      genre: 'male',
      email: 'carlos@gmail.com',
      phone: '1234567',
      occupation: 'Analista',
      gross_salary: 70000
    },
  ])

}
