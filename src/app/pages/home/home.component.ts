import { Component, OnInit } from '@angular/core';
import { PORTFOLIO_ITEMS } from 'src/app/data/portfolio-items';
import { Gallery } from 'src/app/models/Gallery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  portfolioItems: Gallery[] = PORTFOLIO_ITEMS;

  constructor() { }

  ngOnInit(): void {
  }

}
