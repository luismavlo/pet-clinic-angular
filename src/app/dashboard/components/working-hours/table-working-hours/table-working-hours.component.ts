import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, signal, inject } from '@angular/core';
import { WorkingHour } from "../../../../interfaces/working-hour.interface";
import { WorkingHourService } from "../../../../services/working-hour.service";
import {Router} from "@angular/router";
import {LoadingComponent} from "@shared/loading/loading.component";

@Component({
  selector: 'app-table-working-hours',
  standalone: true,
  imports: [
    CommonModule,
    LoadingComponent,
  ],
  templateUrl: './table-working-hours.component.html',
  styleUrl: './table-working-hours.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableWorkingHoursComponent {

  public workingHourService = inject( WorkingHourService )
  private router: Router = inject(Router);

  constructor() {
    this.workingHourService.getWorkingHours()
  }

 selectWorkingHour( workingHour: WorkingHour ){
  this.workingHourService.setWorkingHourSelected( workingHour )
 }

}
