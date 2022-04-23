import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { ServicesComponent } from './pages/services/services.component';
import { CompanyDataComponent } from './pages/survey/company-data/company-data.component';
import { SurveyComponent } from './pages/survey/survey.component';

const routes: Routes = [
  { 
    path: '', 
    component: AdminDashboardComponent,
    children: [
      { path: 'home', component: HomeComponent},
      { path: 'about', component: AboutComponent},
      { path: 'services', component: ServicesComponent},

// Survey route with it's child routes
      { path: 'survey', component: SurveyComponent,
      children: [
        { path: 'company-data', component: CompanyDataComponent},
      ]
    
    },
      
      { path: '', redirectTo:'/admin/home', pathMatch: 'full'},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
