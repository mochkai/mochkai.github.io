import { Component, OnInit , Input} from '@angular/core';
import { Nav } from 'src/app/models/Nav';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  @Input() nav: Nav

  constructor() { }

  ngOnInit(): void {
  }

}
