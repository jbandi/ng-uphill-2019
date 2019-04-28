import {ErrorHandler, Injectable} from '@angular/core';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  handleError(error: any): void {

   // alert('Sorry, we fucked up ....');
    console.log('CUSTOM GLOBAL ERROR HANDLER: We are terribly sorry!!!', error);
   // location.href = '/';
    // IMPORTANT: If the error is not re-thrown, it is swallowed!
    throw error;

  }

}
