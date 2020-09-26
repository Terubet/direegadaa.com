import { AdminContainerComponent } from './admin/admin-container/admin-container.component';
import { HttpClient } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './Container/nav-bar/nav-bar.component';
import { FooterComponent } from './Container/footer/footer.component';
import { SidebarComponent } from './Container/sidebar/sidebar.component';
import { HomeComponent } from './homepage/home/home.component';
import { NewsListComponent } from './news-list/news-list.component';
import { AdminSignupComponent } from './admin/admin-signup/admin-signup.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { HttpClientModule} from '@angular/common/http';
import { NotificationComponent } from './Container/notification/notification.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminForgetPasswordComponent } from './admin/admin-forget-password/admin-forget-password.component';
import { AdminCreateNewpasswordComponent } from './admin/admin-create-newpassword/admin-create-newpassword.component';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { RecentProductComponent } from './recent-product/recent-product.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { AllCategoryViewComponent } from './all-category-view/all-category-view.component';
import { OurServiceComponent } from './our-service/our-service.component';
import { ProductDetialComponent } from './product-detial/product-detial.component';
import { HeaderComponent } from './Container/header/header.component';
import { ElectronicComponent } from './Categories/electronic/electronic.component';
import { FashionComponent } from './Categories/fashion/fashion.component';
import { BlogBoardComponent } from './Container/blog-board/blog-board.component';
import { AllViewComponent } from './all-view/all-view.component';
import { AdminHeaderComponent } from './admin/Sales-Container/admin-header/admin-header.component';
import { AdminFooterComponent } from './admin/Sales-Container/admin-footer/admin-footer.component';
import { AdminSidebarComponent } from './admin/Sales-Container/admin-sidebar/admin-sidebar.component';



const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto',
};

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    SidebarComponent,
    HomeComponent,
    NewsListComponent,
    AdminSignupComponent,
    AdminLoginComponent,
    NotificationComponent,
    AdminContainerComponent,
    AdminForgetPasswordComponent,
    AdminCreateNewpasswordComponent,
    RecentProductComponent,
    ProductViewComponent,
    AllCategoryViewComponent,
    OurServiceComponent,
    ProductDetialComponent,
    HeaderComponent,
    ElectronicComponent,
    FashionComponent,
    BlogBoardComponent,
    AllViewComponent,
    AdminHeaderComponent,
    AdminFooterComponent,
    AdminSidebarComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SwiperModule,

  ],
  providers: [
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
