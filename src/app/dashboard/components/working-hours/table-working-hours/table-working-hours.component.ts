import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, signal, inject } from '@angular/core';
import { WorkingHour } from "../../../../interfaces/working-hour.interface";
import { WorkingHourService } from "../../../../services/working-hour.service";

@Component({
  selector: 'app-table-working-hours',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './table-working-hours.component.html',
  styleUrl: './table-working-hours.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableWorkingHoursComponent { 

  public workingHourService = inject( WorkingHourService )

  public workingHours = signal<WorkingHour[]>([{
    "id":1,
    "start_date":"2010-10-10",
    "end_date":"2010-10-10",
    "appointment_duration":250,
    "start_hour":"25",
    "shift_duration":25,
    "end_hour":"24",
    "employee_id":1,
    "remember_token":null,
    "created_at":null,
    "updated_at":"2024-02-09T20:32:44.000000Z",
    "employees":{
       "id":1,
       "occupation":"ing",
       "gross_salary":2000,
       "email":"nilfer@gmail.com",
       "password":"123",
       "phone":"nada",
       "user_id":1,
       "remember_token":null,
       "created_at":null,
       "updated_at":null
    }
 }])

 selectWorkingHour( workingHour: WorkingHour ){
  this.workingHourService.setWorkingHourSelected( workingHour )
 }

}
