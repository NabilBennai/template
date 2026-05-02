import {Component} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {Router, RouterLink} from '@angular/router';
import {TranslatePipe} from '@ngx-translate/core';

import {AuthService} from '../core/services/auth.service';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, RouterLink, TranslatePipe],
  template: `
    <form class="space-y-4 rounded-xl bg-white p-4 shadow" [formGroup]="form" (ngSubmit)="submit()">
      <label class="block">
        {{ 'auth.email' | translate }}
        <input class="w-full rounded border p-2" formControlName="email" type="email"/>
      </label>
      <label class="block">
        {{ 'auth.password' | translate }}
        <input class="w-full rounded border p-2" formControlName="password" type="password"/>
      </label>
      <button class="rounded bg-slate-900 px-4 py-2 text-white" type="submit" [disabled]="form.invalid">
        {{ 'auth.login' | translate }}
      </button>
      <a class="ml-3 underline" routerLink="/register">{{ 'auth.register' | translate }}</a>
    </form>
  `
})
export class LoginComponent {
  readonly form: FormGroup;

  constructor(
    private readonly fb: FormBuilder,
    private readonly authService: AuthService,
    private readonly router: Router
  ) {
    this.form = this.fb.nonNullable.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  submit(): void {
    if (this.form.invalid) {
      return;
    }

    this.authService.login(this.form.getRawValue()).subscribe(() => {
      this.router.navigateByUrl('/app');
    });
  }
}
