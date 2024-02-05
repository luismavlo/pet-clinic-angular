import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Input, inject } from "@angular/core"
import { Client } from "../../../../interfaces/clients.interface";
import { Router } from "@angular/router";
import { Employee } from "../../../../interfaces/employee.interface";

@Component({
  selector: 'app-employee-card',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './employee-card.component.html',
  styleUrl: './employee-card.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeCardComponent { 

  @Input() employee!: Employee;

  private router = inject( Router );

  goToEmployeeDetail(employeeId: number){
    this.router.navigate([`/dashboard/employee`, employeeId])
  }

}
