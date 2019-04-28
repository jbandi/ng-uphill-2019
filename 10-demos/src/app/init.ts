// should be implemented in another file
import {HttpClient} from '@angular/common/http';

export function loadInitialData(httpClient: HttpClient) {
  return () => {
    // DEMO: just waiting
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('CUSTOM INITIALIZATION: Finished ...');
        resolve(true);
      }, 500);
    });

    // // Alternative: Getting data from a server
    // return httpClient.get('https://api.github.com/repos/angular/angular/commits')
    //   .toPromise()
    //   .then(response => {
    //     console.log('Loaded data: ', response);
    //     // we could save the data into a service
    //   });
  };
}
