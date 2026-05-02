import {Component} from '@angular/core';
import {RouterLink} from '@angular/router';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-private-layout',
  imports: [RouterLink, TranslatePipe],
  template: `
    <section class="mx-auto max-w-3xl p-6">
      <h2 class="text-xl font-semibold">{{ 'common.privateArea' | translate }}</h2>
      <p>{{ 'common.privateDescription' | translate }}</p>
      <a class="underline" routerLink="/admin">Espace admin</a>
    </section>
  `
})
export class PrivateLayoutComponent {
}
