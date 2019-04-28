import { Component, OnInit } from '@angular/core';
import {ProviderService} from './provider.service';

@Component({
  selector: 'aw-service-consumer',
  templateUrl: './service-consumer.component.html',
  // providers: [ProviderService]  // A service can be provided by a component for itself and all it's children
})
export class ServiceConsumerComponent implements OnInit {

  message = '';

  constructor(private provider: ProviderService) { }

  ngOnInit() {
    this.message = this.provider.getMessage();
  }

}
