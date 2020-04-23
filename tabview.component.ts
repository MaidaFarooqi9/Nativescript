import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterExtensions } from 'nativescript-angular/router';
//import { Page } from 'tns-core-modules/ui/page';

@Component({
  selector: 'ns-challenge-tabs',
  templateUrl: './tabview.component.html',
  styleUrls: ['./tabview.component.css'],
  moduleId: module.id
})
export class TabViewComponent implements OnInit {
  constructor(
    private router: RouterExtensions,
    private active: ActivatedRoute//,
   // private page: Page
  ) {}

  ngOnInit() {
    this.router.navigate(
      [
        {
          outlets: { coffee: ['prog-ns'], cakes: ['Cakes'] }
        }
      ],
      {
        relativeTo: this.active
      }
    );
    // this.page.actionBarHidden = true;
  }
}
