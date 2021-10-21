import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ComponentsModule } from '../components/components.module';
import { PortfolioDetailComponent } from './portfolio/portfolio-detail/portfolio-detail.component';
import { PortfolioGalleryComponent } from './portfolio/portfolio-gallery/portfolio-gallery.component';
import { SocialComponent } from './social/social.component';
import { ContactComponent } from './contact/contact.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HomeComponent,
    PortfolioGalleryComponent,
    PortfolioDetailComponent,
    SocialComponent,
    ContactComponent
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
