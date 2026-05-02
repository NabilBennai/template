import {Component} from '@angular/core';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-admin-layout',
  imports: [TranslatePipe],
  template: `
    <section class="mx-auto max-w-3xl p-6">
      <h2 class="text-xl font-semibold">{{ 'common.adminArea' | translate }}</h2>
      <p>{{ 'common.adminDescription' | translate }}</p>
    </section>
  `
})
export class AdminLayoutComponent {
}
