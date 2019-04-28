import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import {debounceTime, distinctUntilChanged, map, switchMap} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'aw-backend-search',
  templateUrl: 'backend-search.component.html'
})
export class BackendSearchComponent implements OnInit {
  searchTerm = new Subject<string>();
  items: Array<string>;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.searchTerm
      .pipe(
        debounceTime(400),
        distinctUntilChanged(),
        switchMap(term => this.searchWikipedia(term))
      )
      .subscribe((results: any) => (this.items = results));
  }

  searchWikipedia(term: string) {

    const queryUrl = `https://en.wikipedia.org//w/api.php?action=opensearch&format=json&origin=*&maxlag=17&search=${term}`;

    return this.http.get(queryUrl).pipe(map(response => response[1]));
  }
}
