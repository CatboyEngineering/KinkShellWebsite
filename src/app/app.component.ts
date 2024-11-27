import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { RECAPTCHA_V3_SITE_KEY, RecaptchaFormsModule, RecaptchaModule, RecaptchaSettings, RecaptchaV3Module } from 'ng-recaptcha';
import { RecaptchaCommonModule } from 'ng-recaptcha/lib/recaptcha-common.module';
import { NavComponent } from './components/ui/nav/nav.component';
import { AuthStateService } from './store/auth-state/auth-state.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RecaptchaV3Module, NavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'KinkShellWebsite';

  constructor(private authStateService: AuthStateService) {}

  ngOnInit(): void {
    this.authStateService.onHeartbeat();
  }
}
