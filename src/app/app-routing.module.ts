import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { ConfirmAccountComponent } from './pages/confirm-account/confirm-account.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { LandingComponent } from './pages/landing/landing.component';
import { LoginComponent } from './pages/login/login.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';
import { SignupComponent } from './pages/signup/signup.component';

const routes: Routes = [
  { path:'landing', component: LandingComponent},
  { path:'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'reset-password', component: ResetPasswordComponent },
  { path: 'confirm-account/account/verify-email', component: ConfirmAccountComponent },
  { path: '', redirectTo: '/landing', pathMatch: 'full'},
  
  // Lazzy Loading Route 1
  {
    path: 'admin',
    canActivate: [AuthGuard],
    loadChildren: () =>
    import('./modules/admin/admin.module').then((m) => m.AdminModule),
  },
  // Lazzy Loading Route 2
  {
    path: 'employee',
    loadChildren: () => 
    import('./modules/employee/employee.module').then((m) => m.EmployeeModule),
  },
  // Lazzy Loading Route 3
  {
    path: 'customer',
    loadChildren: () => 
    import('./modules/customer/customer.module').then((m) => m.CustomerModule),
  },
  
  // wildCard for notfound
  { path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
