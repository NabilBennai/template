import {CommonModule} from '@angular/common';
import {Component} from '@angular/core';
import {Router, RouterLink, RouterLinkActive} from '@angular/router';
import {TranslatePipe} from '@ngx-translate/core';

import {AuthService} from '../../core/services/auth.service';
import {I18nService} from '../services/i18n.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, TranslatePipe],
  template: `
    <header class="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur">
      <nav class="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3" aria-label="Global">
        <a class="inline-flex items-center gap-2 text-sm font-semibold text-slate-900" routerLink="/">
          <span class="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-slate-900 text-white">T</span>
          <span>{{ 'nav.brand' | translate }}</span>
        </a>

        <button
          type="button"
          class="hs-collapse-toggle inline-flex items-center justify-center rounded-md border border-slate-200 p-2 text-slate-700 md:hidden"
          data-hs-collapse="#navbar-collapse"
          aria-controls="navbar-collapse"
          aria-label="Menu">
          <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M3 6h18M3 12h18M3 18h18"></path>
          </svg>
        </button>

        <div id="navbar-collapse" class="hs-collapse hidden grow basis-full md:block">
          <div class="mt-3 flex flex-col gap-2 md:mt-0 md:flex-row md:items-center md:justify-end md:gap-3">
            <a routerLink="/app" routerLinkActive="text-slate-900 font-semibold"
               class="text-sm text-slate-600">{{ 'nav.dashboard' | translate }}</a>
            <a *ngIf="isAuthenticated && isAdmin" routerLink="/admin" routerLinkActive="text-slate-900 font-semibold"
               class="text-sm text-slate-600">{{ 'nav.admin' | translate }}</a>

            <ng-container *ngIf="!isAuthenticated; else loggedInActions">
              <a routerLink="/login" routerLinkActive="text-slate-900 font-semibold"
                 class="text-sm text-slate-600">{{ 'auth.login' | translate }}</a>
              <a routerLink="/register"
                 class="inline-flex items-center justify-center rounded-md bg-slate-900 px-3 py-2 text-sm font-medium text-white">
                {{ 'auth.register' | translate }}
              </a>
            </ng-container>

            <ng-template #loggedInActions>
              <button
                type="button"
                (click)="logout()"
                class="inline-flex items-center justify-center rounded-md border border-slate-300 px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">
                {{ 'nav.logout' | translate }}
              </button>
            </ng-template>

            <button
              type="button"
              (click)="toggleLanguage()"
              class="inline-flex items-center justify-center rounded-md border border-slate-300 px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">
              {{ currentLang === 'fr' ? 'EN' : 'FR' }}
            </button>
          </div>
        </div>
      </nav>
    </header>
  `
})
export class NavbarComponent {
  constructor(
    private readonly authService: AuthService,
    private readonly router: Router,
    private readonly i18nService: I18nService
  ) {
  }

  get isAuthenticated(): boolean {
    return this.authService.isAuthenticated();
  }

  get isAdmin(): boolean {
    return this.authService.hasAdminRole();
  }

  get currentLang(): string {
    return this.i18nService.currentLang;
  }

  logout(): void {
    this.authService.logout().subscribe({
      next: () => this.router.navigateByUrl('/login'),
      error: () => this.router.navigateByUrl('/login')
    });
  }

  toggleLanguage(): void {
    const nextLang = this.currentLang === 'fr' ? 'en' : 'fr';
    this.i18nService.setLang(nextLang);
  }
}
