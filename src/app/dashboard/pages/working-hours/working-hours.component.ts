import { TableWorkingHoursComponent } from './../../components/working-hours/table-working-hours/table-working-hours.component';
import { FormWorkingHoursComponent } from './../../components/working-hours/form-working-hours/form-working-hours.component';
import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SectionTitleComponent } from "../../components/commons/section-title/section-title.component";

@Component({
  selector: 'app-working-hours',
  standalone: true,
  imports: [
    CommonModule,
    SectionTitleComponent,
    FormWorkingHoursComponent,
    TableWorkingHoursComponent
  ],
  templateUrl: './working-hours.component.html',
  styleUrl: './working-hours.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class WorkingHoursComponent { }
