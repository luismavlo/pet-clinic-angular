import { OptionMenuComponent } from './../../components/general-consultation/option-menu/option-menu.component';
import { Component } from '@angular/core';
import { SectionTitleComponent } from '../../components/commons/section-title/section-title.component';

@Component({
  selector: 'app-general-consultation',
  standalone: true,
  imports: [
    SectionTitleComponent,
    OptionMenuComponent
  ],
  templateUrl: './general-consultation.component.html',
  styleUrl: './general-consultation.component.css'
})
export default class GeneralConsultationComponent {

}
