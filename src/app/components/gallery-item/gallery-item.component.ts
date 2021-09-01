import { Component, Input, OnInit } from '@angular/core';
import { Gallery } from 'src/app/models/Galley';

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
