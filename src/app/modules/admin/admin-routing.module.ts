import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { ChangePasswordComponent } from './pages/change-password/change-password.component';
import { HomeComponent } from './pages/home/home.component';
import { ServicesComponent } from './pages/services/services.component';
import { CompanyDataComponent } from './pages/survey/company-data/company-data.component';
import { CompanyInfoComponent } from './pages/survey/company-info/company-info.component';
import { PoliciesComponent } from './pages/survey/policies/policies.component';
import { ResourceManagementComponent } from './pages/survey/resource-management/resource-management.component';
import { SupplyChainComponent } from './pages/survey/supply-chain/supply-chain.component';
import { SurveyComponent } from './pages/survey/survey.component';

const routes: Routes = [
  { 
    path: '', 
    component: AdminDashboardComponent,
    children: [
      { path: 'home', component: HomeComponent},
      { path: 'about', component: AboutComponent},
      { path: 'services', component: ServicesComponent},
      { path: 'change-password', component: ChangePasswordComponent},

// Survey route with it's child routes
      { path: 'survey', component: SurveyComponent,
      children: [
        { path: 'company-data', component: CompanyDataComponent},
        { path: 'policies', component: PoliciesComponent},
        { path: 'company-info', component: CompanyInfoComponent},
        { path: 'supply-chain', component: SupplyChainComponent},
        { path: 'resource-management', component: ResourceManagementComponent},
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
