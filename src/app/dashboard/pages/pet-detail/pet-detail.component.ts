import { MoreInformationComponent } from './../../components/pets/more-information/more-information.component';
import { FormPetComponent } from './../../components/pets/form-pet/form-pet.component';
import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SectionTitleComponent } from "../../components/commons/section-title/section-title.component";
import { LoadingComponent } from '@shared/loading/loading.component';

@Component({
  selector: 'app-pet-detail',
  standalone: true,
  imports: [
    CommonModule,
    SectionTitleComponent,
    FormPetComponent,
    MoreInformationComponent,
    LoadingComponent
  ],
  templateUrl: './pet-detail.component.html',
  styleUrl: './pet-detail.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PetDetailComponent { }
