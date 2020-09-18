import { ProductDetialComponent } from './product-detial/product-detial.component';
import { OurServiceComponent } from './our-service/our-service.component';
import { AdminContainerComponent } from './admin/admin-container/admin-container.component';
import { Auth } from 'src/app/admin/helper/guard/auth.guard';
import { AdminSignupComponent } from './admin/admin-signup/admin-signup.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { NewsListComponent } from './news-list/news-list.component';
import { HomeComponent } from './homepage/home/home.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotificationComponent } from './notification/notification.component';
import { from } from 'rxjs';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AdminForgetPasswordComponent } from './admin/admin-forget-password/admin-forget-password.component';
import { AdminCreateNewpasswordComponent } from './admin/admin-create-newpassword/admin-create-newpassword.component';
import { ElectronicComponent } from './electronic/electronic.component';

const routes: Routes = [
  {
    path: 'login',
    component: AdminLoginComponent,
  },

{
  path: 'dashboard',
  component: DashboardComponent,
  canActivate: [Auth]
},
{
path: 'forgetpassword', component: AdminForgetPasswordComponent
},
{
path: 'createpassword', component: AdminCreateNewpasswordComponent
},
  {
    path: 'signup',
    component: AdminSignupComponent,
  },
  { path: 'nav', component: NavBarComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'sidebar', component: SidebarComponent },
  { path: 'news', component: NewsListComponent },
  { path: '', component: HomeComponent },
  { path: 'message', component: NotificationComponent },
  { path: 'ourservice', component: OurServiceComponent},
  { path: 'product-detial', component: ProductDetialComponent },
  { path: 'electronic', component: ElectronicComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
