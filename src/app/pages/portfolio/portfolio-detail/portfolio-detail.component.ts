import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { PORTFOLIO_ITEMS } from 'src/app/data/portfolio-items';
import { Portfolio } from 'src/app/models/Portfolio';

@Component({
  selector: 'app-portfolio-detail',
  templateUrl: './portfolio-detail.component.html',
  styleUrls: ['./portfolio-detail.component.scss']
})
export class PortfolioDetailComponent implements OnInit {
  item!: Portfolio;
  relatedItems!: Portfolio[];
  iframeSrc: SafeResourceUrl | null = null;

  constructor(private route: ActivatedRoute, private router: Router, private sanitizer: DomSanitizer) {
    this.route.paramMap.subscribe(paramMap => {
      this.item = PORTFOLIO_ITEMS[Number(paramMap.get('itemId'))];

      if (!this.item)
        this.router.navigate(['/portfolio']);

      this.iframeSrc = null;

      if (this.item.demoURL) {
        this.iframeSrc = this.sanitizer.bypassSecurityTrustResourceUrl(this.item.demoURL);
      }

      console.log(this.iframeSrc);

      this.relatedItems = PORTFOLIO_ITEMS.filter(_item => (_item.id != this.item.id && _item.category == this.item.category));
    });
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.iframeSrc = null;
  }
}
