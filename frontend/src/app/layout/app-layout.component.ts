import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <main class="mx-auto max-w-6xl px-4 py-6">
      <router-outlet />
    </main>
  `
})
export class AppLayoutComponent {
}
