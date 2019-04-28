import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'aw-routed',
  templateUrl: './routed.component.html'
})
export class RoutedObservableComponent implements OnInit {
  detailNo: number;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.paramMap
      .pipe(map(p => parseInt(p.get('detailNumber'), 10)))
      .subscribe(n => (this.detailNo = n));
  }

  goToNextDetail() {
    const nextNumber = this.detailNo + 1;

    // Navigate with relative link
    this.router.navigate(['..', nextNumber], { relativeTo: this.route });
  }
}
