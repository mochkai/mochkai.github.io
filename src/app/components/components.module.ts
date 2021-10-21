import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner/banner.component';
import { GalleryComponent } from './gallery/gallery.component';
import { GalleryItemComponent } from './gallery-item/gallery-item.component';
import { BrandsComponent } from './brands/brands.component';
import { WorkComponent } from './work/work.component';
import { DescriptionComponent } from './description/description.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    BannerComponent,
    GalleryComponent,
    GalleryItemComponent,
    BrandsComponent,
    WorkComponent,
    DescriptionComponent
  ],
  exports: [
    BannerComponent,
    GalleryComponent,
    GalleryItemComponent,
    BrandsComponent,
    WorkComponent,
    DescriptionComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class ComponentsModule { }
