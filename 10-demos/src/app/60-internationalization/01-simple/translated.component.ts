import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'aw-translated',
  template: `
    <div>
      Switch language:
      <a routerLink="." (click)="useLanguage('de')">DE</a>
      &nbsp;
      <a routerLink="." (click)="useLanguage('fr')">FR</a>
    </div>

    <br>

    <div>
      Translated with a pipe:
    </div>
    <h3>{{ 'HELLO' | translate:param }}</h3>

    <div>
      Translated with a directive:
    </div>
    <h3 translate [translateParams]="param">HELLO</h3>

    <div>
      <button (click)="alert()">Alert</button>

    </div>
  `,
  styles: []
})
export class TranslatedComponent implements OnInit {

  param = {name: 'world'};

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('de');
    translate.use('de');
  }

  ngOnInit() {
  }

  useLanguage(language: string) {
    this.translate.use(language);
  }

  alert() {
    this.translate.get('HELLO', this.param)
      .subscribe(translatedValue => {
        alert(translatedValue);
      });
  }
}
