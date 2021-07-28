import { Component, OnInit } from '@angular/core';
import { Nav } from 'src/app/models/Nav';
import { MAIN_NAV } from 'src/app/data/main-nav';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  mainNav: Nav[] = MAIN_NAV;

  constructor() { }

  ngOnInit(): void {
  }

}
