import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `
    <div class="fixed inset-0 flex justify-center items-center bg-transparent z-50">
      <div class="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-100 bg-white"></div>
    </div>  
  `,
  styleUrl: './loading.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoadingComponent { }
