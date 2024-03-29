import { EmployeeCardComponent } from './../employee-card/employee-card.component';
import { CommonModule } from "@angular/common";
import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import { signal } from '@angular/core'
import { Employee } from "../../../../interfaces/employee.interface";
import {EmployeeService} from "../../../../services/employee.service";

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

  public employeeService = inject( EmployeeService );

  constructor() {
    this.employeeService.getEmployees();
  }

}
