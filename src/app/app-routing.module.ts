import { AdminSignupComponent } from './admin/admin-signup/admin-signup.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { NewsListComponent } from './news-list/news-list.component';
import { HomeComponent } from './homepage/home/home.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'login', component: AdminLoginComponent
  },
  {
    path: 'signup', component: AdminSignupComponent
  },
 { path: 'nav', component: NavBarComponent },
 { path: 'footer', component: FooterComponent },
 { path: 'sidebar', component: SidebarComponent},
  { path: 'news', component: NewsListComponent },
 { path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
