import { SidemenuComponent } from '@shared/sidemenu/sidemenu.component';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [ RouterModule, SidemenuComponent ],
  templateUrl: './dashboard.component.html',
  styles: ``
})
export default class DashboardComponent {

}
