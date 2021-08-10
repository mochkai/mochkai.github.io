import { Component, Input, OnInit } from '@angular/core';
import { Gallery } from 'src/app/models/Galley';
import { PORTFOLIO_ITEMS } from 'src/app/data/portfolio-items';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  portfolioItems: Gallery[] = PORTFOLIO_ITEMS;

  constructor() {}

  ngOnInit(): void {
  }

}
