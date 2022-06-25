import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { ChangePasswordComponent } from './pages/change-password/change-password.component';
import { HomeComponent } from './pages/home/home.component';
import { ServicesComponent } from './pages/services/services.component';
import { AboutComponent } from './pages/survey/company-data/about/about.component';
import { CompanyDataComponent } from './pages/survey/company-data/company-data.component';
import { CustomerComponent } from './pages/survey/company-data/customer/customer.component';
import { DepartmentComponent } from './pages/survey/company-data/department/department.component';
import { GeneralDataComponent } from './pages/survey/company-data/general-data/general-data.component';
import { MembershipComponent } from './pages/survey/company-data/membership/membership.component';
import { SupplierComponent } from './pages/survey/company-data/supplier/supplier.component';
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
      { path: 'services', component: ServicesComponent},
      { path: 'change-password', component: ChangePasswordComponent},

// Survey route with it's child routes
      { path: 'survey', component: SurveyComponent,
      children: [
        { path: 'about', component: AboutComponent},
        { path: 'general-data', component: GeneralDataComponent},
        { path: 'customer', component: CustomerComponent},
        { path: 'supplier', component: SupplierComponent},
        { path: 'membership', component: MembershipComponent},
        { path: 'department', component: DepartmentComponent},
        // { path: 'resource-management', component: ResourceManagementComponent},
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
