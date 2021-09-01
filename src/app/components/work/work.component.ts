import { Component, OnInit } from '@angular/core';
import { WORK_ITEMS } from 'src/app/data/work-items';
import { Work } from 'src/app/models/Work';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {
  workItems: Work[] = WORK_ITEMS;

  constructor() { }

  ngOnInit(): void {
  }

}
