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
  item: Portfolio;
  replitURL: SafeResourceUrl | null = null;

  constructor(private route: ActivatedRoute, private router: Router, private sanitizer: DomSanitizer) {
    this.item = PORTFOLIO_ITEMS[this.route.snapshot.params['itemId']];
    if (!this.item) router.navigate(['/']);

    if (this.item.replit) {
      let tempURL = "https://replit.com/@mochkai/" + this.item.replit + "?lite=true";
      this.replitURL = this.sanitizer.bypassSecurityTrustResourceUrl(tempURL);
    }
  }

  ngOnInit(): void {
    console.log(this.item);
  }

}
