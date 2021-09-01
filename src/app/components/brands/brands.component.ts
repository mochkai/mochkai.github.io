import { Component, OnInit } from '@angular/core';
import { BRANDS_ITEMS } from 'src/app/data/brand-items';
import { Brands } from 'src/app/models/Brands';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss']
})
export class BrandsComponent implements OnInit {
  brandItems: Brands[] = BRANDS_ITEMS;

  constructor() { }

  ngOnInit(): void {
  }

}
