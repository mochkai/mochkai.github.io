import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavItemComponent } from './components/nav-item/nav-item.component';
import { NavComponent } from './components/nav/nav.component';
import { BannerComponent } from './components/banner/banner.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { FooterComponent } from './components/footer/footer.component';
import { GalleryItemComponent } from './components/gallery-item/gallery-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavItemComponent,
    NavComponent,
    BannerComponent,
    GalleryComponent,
    FooterComponent,
    GalleryItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
