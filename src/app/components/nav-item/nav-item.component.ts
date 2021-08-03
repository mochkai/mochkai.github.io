import { Component, Input, OnInit } from '@angular/core';
import { Nav } from 'src/app/models/Nav';

@Component({
  selector: 'app-nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.scss']
})
export class NavItemComponent implements OnInit {
  @Input("nav-item") navItem!: Nav;
  noSubmenu: boolean = true;

  constructor() { 
    
  }

  ngOnInit(): void {
    this.noSubmenu = (this.navItem.submenu) ? false : true;
    
  }

}
