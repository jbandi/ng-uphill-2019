import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'aw-routed',
  templateUrl: './routed.component.html',
})
export class RoutedComponent implements OnInit {

  detailNo: number;

  constructor(private route: ActivatedRoute, private router: Router ) { }

  ngOnInit() {
    const parsedNumber = parseInt(this.route.snapshot.paramMap.get('detailNumber'), 10);
    this.detailNo = parsedNumber;
  }

  goToNextDetail() {
    const nextNumber = this.detailNo + 1;

    // Navigate with relative link
    this.router.navigate(['..', nextNumber], { relativeTo: this.route });
  }


}
