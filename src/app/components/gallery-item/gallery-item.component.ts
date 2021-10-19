import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Gallery } from 'src/app/models/Gallery';

@Component({
  selector: 'app-gallery-item',
  templateUrl: './gallery-item.component.html',
  styleUrls: ['./gallery-item.component.scss']
})
export class GalleryItemComponent implements OnInit {
  @Input() item!: Gallery;

  constructor() { }

  ngOnInit(): void {
    if (!this.item.image) {
      switch (this.item.category) {
        case 'library':
          this.item.image = 'assets/img/default-gallery.jpeg';
          this.item.icon = 'book';
          break;
        case 'project':
        default:
          this.item.image = 'assets/img/default-gallery.jpeg';
          this.item.icon = 'code';
      }
    }
  }

}
