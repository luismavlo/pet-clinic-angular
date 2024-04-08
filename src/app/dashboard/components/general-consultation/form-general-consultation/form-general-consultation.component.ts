import { CommonModule } from "@angular/common";
import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {Router} from "@angular/router";
import {GeneralConsultationService} from "../../../../services/general-consultation.service";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-form-general-consultation',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './form-general-consultation.component.html',
  styleUrl: './form-general-consultation.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormGeneralConsultationComponent {

  private router: Router = inject(Router);
  public generalConsultationService = inject(GeneralConsultationService);

  public generalConsultationForm: FormGroup = this.fb.group({
    id: 0
  })

  constructor(
    private fb: FormBuilder
  ) {
  }

}
