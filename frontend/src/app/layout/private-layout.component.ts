import {Component} from '@angular/core';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-private-layout',
  standalone: true,
  imports: [TranslatePipe],
  template: `
    <section class="rounded-xl bg-white p-5 shadow">
      <h2 class="text-xl font-semibold">{{ 'common.dashboardTitle' | translate }}</h2>
      <p>{{ 'common.dashboardDescription' | translate }}</p>
    </section>
  `
})
export class PrivateLayoutComponent {
}
