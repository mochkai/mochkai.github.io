import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryComponent } from './gallery/gallery.component';
import { GalleryItemComponent } from './gallery-item/gallery-item.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    GalleryComponent,
    GalleryItemComponent
  ],
  exports: [
    GalleryComponent,
    GalleryItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class ComponentsModule { }
