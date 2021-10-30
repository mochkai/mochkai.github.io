import { Component, OnInit } from '@angular/core';
import { BRANDS_ITEMS } from 'src/app/data/brand-items';
import { PORTFOLIO_ITEMS } from 'src/app/data/portfolio-items';
import { WORK_ITEMS } from 'src/app/data/work-items';
import { Brands } from 'src/app/models/Brands';
import { Gallery } from 'src/app/models/Gallery';
import { Work } from 'src/app/models/Work';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  portfolioItems: Gallery[] = PORTFOLIO_ITEMS;
  workItems: Work[] = WORK_ITEMS;
  brandItems: Brands[] = BRANDS_ITEMS;

  constructor() { }

  ngOnInit(): void {
  }

}
