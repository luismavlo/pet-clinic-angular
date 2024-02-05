import { FormEmployeeComponent } from './../../components/employees/form-employee/form-employee.component';
import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SectionTitleComponent } from '../../components/commons/section-title/section-title.component';

@Component({
  selector: 'app-employee-detail',
  standalone: true,
  imports: [
    CommonModule,
    FormEmployeeComponent,
    SectionTitleComponent
  ],
  templateUrl: './employee-detail.component.html',
  styleUrl: './employee-detail.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class EmployeeDetailComponent { }
