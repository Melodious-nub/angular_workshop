import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './pages/footer/footer.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { ServicesComponent } from './pages/services/services.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { AppComponent } from 'src/app/app.component';
import { SurveyComponent } from './pages/survey/survey.component';
import { CompanyDataComponent } from './pages/survey/company-data/company-data.component';
import { PoliciesComponent } from './pages/survey/policies/policies.component';
import { CompanyInfoComponent } from './pages/survey/company-info/company-info.component';
import { SupplyChainComponent } from './pages/survey/supply-chain/supply-chain.component';
import { ResourceManagementComponent } from './pages/survey/resource-management/resource-management.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav'
import { DataService } from 'src/app/services/data.service';
import { ChangePasswordComponent } from './pages/change-password/change-password.component';
import { NgxUiLoaderHttpModule, NgxUiLoaderModule } from 'ngx-ui-loader';
import { GeneralDataComponent } from './pages/survey/company-data/general-data/general-data.component';
import { CustomerComponent } from './pages/survey/company-data/customer/customer.component';
import { SupplierComponent } from './pages/survey/company-data/supplier/supplier.component';
import { AboutComponent } from './pages/survey/company-data/about/about.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MembershipComponent } from './pages/survey/company-data/membership/membership.component';
import { DepartmentComponent } from './pages/survey/company-data/department/department.component';

@NgModule({
  declarations: [
    AdminDashboardComponent,
    HomeComponent,
    FooterComponent,
    NavbarComponent,
    ServicesComponent,
    SurveyComponent,
    CompanyDataComponent,
    PoliciesComponent,
    CompanyInfoComponent,
    SupplyChainComponent,
    ResourceManagementComponent,
    ChangePasswordComponent,
    GeneralDataComponent,
    CustomerComponent,
    SupplierComponent,
    AboutComponent,
    MembershipComponent,
    DepartmentComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatButtonModule,
    AdminRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatRadioModule,
    MatTabsModule,
    MatSelectModule,
    MatAutocompleteModule,
    NgxDropzoneModule,
    MatCheckboxModule,
    MatSidenavModule,
    // NgxUiLoaderModule,
    // NgxUiLoaderHttpModule,
  ],
  providers: [
    DataService,
    AuthService,
  ],
  bootstrap: [AppComponent]
})
export class AdminModule { }
