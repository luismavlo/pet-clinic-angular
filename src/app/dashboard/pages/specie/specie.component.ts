import { TableSpecieComponent } from './../../components/species/table-specie/table-specie.component';
import { FormSpecieComponent } from './../../components/species/form-specie/form-specie.component';
import { Component } from '@angular/core';
import { SectionTitleComponent } from '../../components/commons/section-title/section-title.component';
import { LoadingComponent } from '@shared/loading/loading.component';

@Component({
  selector: 'app-specie',
  standalone: true,
  imports: [
    SectionTitleComponent,
    FormSpecieComponent,
    TableSpecieComponent,
    LoadingComponent
  ],
  templateUrl: './specie.component.html',
  styleUrl: './specie.component.css'
})
export default class SpecieComponent {

}
