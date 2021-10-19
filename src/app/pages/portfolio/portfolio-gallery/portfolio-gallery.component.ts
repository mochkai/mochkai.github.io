import { Component, OnInit } from '@angular/core';
import { PORTFOLIO_ITEMS } from 'src/app/data/portfolio-items';
import { Gallery } from 'src/app/models/Gallery';

@Component({
  selector: 'app-portfolio-gallery',
  templateUrl: './portfolio-gallery.component.html',
  styleUrls: ['./portfolio-gallery.component.scss']
})
export class PortfolioGalleryComponent implements OnInit {
  portfolioItems: Gallery[] = PORTFOLIO_ITEMS;

  constructor() { }

  ngOnInit(): void {
  }

}
