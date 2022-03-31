import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { LandingComponent } from './pages/landing/landing.component';
import { LoginComponent } from './pages/login/login.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { SignupComponent } from './pages/signup/signup.component';

const routes: Routes = [
  { path:'landing', component: LandingComponent},
  { path:'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent, pathMatch: 'full' },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  
  // Lazzy Loadind Route
  {
    path: 'admin',
    canActivate: [AuthGuard],
    loadChildren: () =>
    import('./modules/admin/admin.module').then((m) => m.AdminModule),
  },
  
  { path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
