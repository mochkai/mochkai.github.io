import { Component, Input, OnInit } from '@angular/core';
import { Gallery } from 'src/app/models/Gallery';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  @Input() galleryItems: Gallery[] | null = null;
  @Input() isFeatured: boolean = false;
  @Input() category!: string;

  constructor() { }

  ngOnInit(): void {
    if (this.galleryItems && this.galleryItems.length > 0) {
      if (this.isFeatured)
        this.galleryItems = this.galleryItems.filter(_item => _item.featured == true);

      if (this.category)
        this.galleryItems = this.galleryItems.filter(_item => _item.category == this.category);
    }

    if (this.galleryItems && this.galleryItems.length > 0)
      this.galleryItems = this.galleryItems.map(_item => { _item.url = _item.route ? _item.route : _item.url; return _item; });
    else {
      this.galleryItems = null;
    }
  }

}
