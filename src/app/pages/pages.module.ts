import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ComponentsModule } from '../components/components.module';
import { PortfolioDetailComponent } from './portfolio/portfolio-detail/portfolio-detail.component';
import { PortfolioGalleryComponent } from './portfolio/portfolio-gallery/portfolio-gallery.component';
import { SocialComponent } from './social/social.component';
import { ContactComponent } from './contact/contact.component';
import { RouterModule } from '@angular/router';
import { PageComponent } from './page/page.component';
import { HeaderComponent } from '../components/header/header.component';
import { NavItemComponent } from '../components/nav-item/nav-item.component';
import { NavComponent } from '../components/nav/nav.component';
import { FooterComponent } from '../components/footer/footer.component';



@NgModule({
  declarations: [
    HomeComponent,
    PortfolioGalleryComponent,
    PortfolioDetailComponent,
    SocialComponent,
    ContactComponent,
    PageComponent,
    HeaderComponent,
    NavItemComponent,
    NavComponent,
    FooterComponent
  ],
  exports: [
    HomeComponent,
    PortfolioGalleryComponent,
    PortfolioDetailComponent,
    SocialComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule
  ]
})
export class PagesModule { }
