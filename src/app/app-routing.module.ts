import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { PortfolioDetailComponent } from './pages/portfolio/portfolio-detail/portfolio-detail.component';
import { PortfolioGalleryComponent } from './pages/portfolio/portfolio-gallery/portfolio-gallery.component';
import { SocialComponent } from './pages/social/social.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'portfolio', component: PortfolioGalleryComponent },
  { path: 'portfolio/:itemId', component: PortfolioDetailComponent },
  { path: 'social', component: SocialComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
