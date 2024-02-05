import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SectionTitleComponent } from '../../components/commons/section-title/section-title.component';
import { FormClientComponent } from '../../components/clients/form-client/form-client.component';

@Component({
  selector: 'app-client-detail',
  standalone: true,
  imports: [
    CommonModule,
    SectionTitleComponent,
    FormClientComponent
  ],
  templateUrl: './client-detail.component.html',
  styleUrl: './client-detail.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ClientDetailComponent { }
