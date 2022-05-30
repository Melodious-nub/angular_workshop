import { ErrorHandler, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AuthService } from './services/auth.service';
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon'
import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material/core';
import {MatRadioModule, MAT_RADIO_DEFAULT_OPTIONS} from '@angular/material/radio';
import {MatTabsModule} from '@angular/material/tabs';
import { LandingComponent } from './pages/landing/landing.component';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';
import { ConfirmAccountComponent } from './pages/confirm-account/confirm-account.component';
import { DataService } from './services/data.service';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    NotFoundComponent,
    ForgotPasswordComponent,
    LandingComponent,
    ResetPasswordComponent,
    ConfirmAccountComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    HttpClientModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatRadioModule,
    MatTabsModule,
    ToastrModule.forRoot(),
  ],
  providers: [
    DataService,
    AuthService,
    {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher},
    {provide: MAT_RADIO_DEFAULT_OPTIONS,useValue: { color: 'accent' },}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
