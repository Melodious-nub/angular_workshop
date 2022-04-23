import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './pages/footer/footer.component';
import { AboutComponent } from './pages/about/about.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { ServicesComponent } from './pages/services/services.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PostService } from 'src/app/services/post.service';
import { AuthService } from 'src/app/services/auth.service';
import { AppComponent } from 'src/app/app.component';
import { SurveyComponent } from './pages/survey/survey.component';
import { CompanyDataComponent } from './pages/survey/company-data/company-data.component';


@NgModule({
  declarations: [
    AdminDashboardComponent,
    HomeComponent,
    FooterComponent,
    AboutComponent,
    NavbarComponent,
    ServicesComponent,
    SurveyComponent,
    CompanyDataComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    PostService,
    AuthService,
  ],
  bootstrap: [AppComponent]
})
export class AdminModule { }
