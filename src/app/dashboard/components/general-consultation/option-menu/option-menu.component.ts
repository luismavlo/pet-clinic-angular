import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Input, inject } from "@angular/core"
import { Router } from "@angular/router";

interface Options {
  goTo: string;
  title: string
}


@Component({
  selector: 'app-option-menu',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './option-menu.component.html',
  styleUrl: './option-menu.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OptionMenuComponent { 

  
  @Input({ required: true }) options!: Options;


  private router = inject( Router );

  redirectTo(){
    this.router.navigate([`${this.options.goTo}`])
  }

}
