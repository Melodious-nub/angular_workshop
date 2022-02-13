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
import { FormsModule } from '@angular/forms';
import { PostService } from 'src/app/services/post.service';
import { AuthService } from 'src/app/services/auth.service';


@NgModule({
  declarations: [
    AdminDashboardComponent,
    HomeComponent,
    FooterComponent,
    AboutComponent,
    NavbarComponent,
    ServicesComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    PostService,
    AuthService,
  ],
})
export class AdminModule { }
