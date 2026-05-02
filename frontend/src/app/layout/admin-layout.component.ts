import {Component} from '@angular/core';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-admin-layout',
  standalone: true,
  imports: [TranslatePipe],
  template: `
    <section class="rounded-xl bg-white p-5 shadow">
      <h2 class="text-xl font-semibold">{{ 'common.adminTitle' | translate }}</h2>
      <p>{{ 'common.adminDescription' | translate }}</p>
    </section>
  `
})
export class AdminLayoutComponent {
}
