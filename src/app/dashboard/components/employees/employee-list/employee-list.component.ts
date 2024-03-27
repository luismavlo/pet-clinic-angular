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
      "id": 1,
      "occupation": "ing",
      "gross_salary": 2000,
      "email": "nilfer@gmail.com",
      "password": "123",
      "phone": "nada",
      "user_id": 1,
      "remember_token": null,
      "created_at": null,
      "updated_at": null,
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
  ])

}
