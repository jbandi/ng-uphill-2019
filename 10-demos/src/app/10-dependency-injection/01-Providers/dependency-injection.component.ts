import {Component, OnInit } from '@angular/core';
import {FirstService} from './first.service';
import {SecondService} from './second.service';

@Component({
    selector: 'aw-dependency-injection',
    templateUrl: 'dependency-injection.component.html',
    providers: [FirstService, SecondService] // the services could also be provided at the root NgModule
})
export class DependencyInjectionComponent implements OnInit {

    firstMessage: string;
    secondMessage: string;
    proxiedMessage: string;

    constructor(private _firstService: FirstService, private _secondService: SecondService) {}

    ngOnInit() {

        this._firstService.message = 'Gugus!';

        this.firstMessage = this._firstService.getMessage();
        this.secondMessage = this._secondService.getMessage();
        this.proxiedMessage = this._secondService.getProxiedMessage();
    }


}











// TODO:
// provide(FirstService, {useClass: FirstService})

///////////
// provide(SecondService, {useClass: BetterSecondService})
// // Put the following declaration before the component (classes are not hoisted)
// class BetterSecondService extends SecondService {
// constructor(private _firstService: FirstService){
//     super(_firstService);
// }
//
// getMessage = () => 'The Better Message!!!';
// }

//////////
// provide(SecondService, {useExisting: FirstService})
// + implement `getProxiedMessage` on FirstService

//////////
// provide(SecondService, {useValue: secondService})
// Add above the component:
// const secondService = {
//     getMessage(){ return 'Classes are nonsens!'},
//     getProxiedMessage(){ return 'Really I mean it!'},
// };

//////////
// provide(SecondService, {useFactory: serviceFactory, deps: [FirstService]})
// Add above the component:
// class ThirdService {
//     constructor(private _message: string){} // We probably can't inject message, it should be resolved at runtime ...
//
//     getMessage = () => 'THIRD: ' + this._message;
//     getProxiedMessage = () => 'THIRD: ' + this._message;
// }
//
// const serviceFactory = (firstService: FirstService) => {
//     return new ThirdService(firstService.getMessage());
// };
