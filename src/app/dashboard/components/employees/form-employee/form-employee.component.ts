import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-form-employee',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './form-employee.component.html',
  styleUrl: './form-employee.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormEmployeeComponent { }
