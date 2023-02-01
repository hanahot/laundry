import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ServicesPageComponent } from './services-page/services-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { PricingPageComponent } from './pricing-page/pricing-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { HowItWorksPageComponent } from './how-it-works-page/how-it-works-page.component';
import { AdminDashboardPageComponent } from './admin-dashboard-page/admin-dashboard-page.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { EmployeeInformationPageComponent } from './employee-information-page/employee-information-page.component';
import { CustomerInformationPageComponent } from './customer-information-page/customer-information-page.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { CustomerAccountPageComponent } from './customer-account-page/customer-account-page.component';
import { DriverAccountPageComponent } from './driver-account-page/driver-account-page.component';



const routes: Routes = [

  { path: 'home', component:LandingPageComponent,},
  { path:'services', component: ServicesPageComponent},
  { path: 'about', component: AboutPageComponent },
  { path: 'pricing', component: PricingPageComponent },
  { path: 'contact', component: ContactPageComponent},
  { path: 'login', component: LoginPageComponent},
  { path: 'register', component: RegisterPageComponent},
  { path: 'learnmore', component: HowItWorksPageComponent},
  { path: 'admin', component: AdminPageComponent },
  { path: 'adminDashboard', component: AdminDashboardPageComponent},
  { path: 'employeeInformation', component: EmployeeInformationPageComponent},
  { path: 'customerInformation', component: CustomerInformationPageComponent},
  { path: 'adminLogin', component: AdminLoginComponent },
  { path: 'customerAccount', component: CustomerAccountPageComponent},
  { path: 'driverAccount', component: DriverAccountPageComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}

export const routingComponents = [ LandingPageComponent,ServicesPageComponent,AboutPageComponent,PricingPageComponent,ContactPageComponent,LoginPageComponent,RegisterPageComponent,HowItWorksPageComponent,AdminDashboardPageComponent,AdminPageComponent,EmployeeInformationPageComponent,CustomerInformationPageComponent,AdminLoginComponent,CustomerAccountPageComponent,DriverAccountPageComponent]
