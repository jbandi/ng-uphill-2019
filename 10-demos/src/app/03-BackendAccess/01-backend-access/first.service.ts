import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators'; // lettable operators are new since RxJS 5.5

interface CommitData {
  commit: {
    author: {
      name: string,
      date: string
    }
  };
}

interface Commit {
  name: string;
  date: Date;
}

@Injectable({providedIn: 'root'})
export class FirstService {
  constructor(private httpClient: HttpClient) {
  }

  getData(): Observable<Commit[]> {
    return this.httpClient.get<CommitData[]>('https://api.github.com/repos/angular/angular/commits')
      .pipe(
        map(commitDataArray => commitDataArray.map(c => getSimpleCommitObject(c))),
        catchError(this.handleError)
      );
  }

  requestData(): Observable<Commit[]> {
    return this.httpClient.get<CommitData[]>('https://api.github.com/repos/angular/angular/commits', {observe: 'response'})
      .pipe(
        tap(response => console.log('Full response', response)),
        map(response => response.body), // note: 'response' is of type HttpResponse<CommitData[]> here
        map(commitDataArray => commitDataArray.map(c => getSimpleCommitObject(c))),
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    console.error(error);
    return throwError(error.message || 'Server error');
  }
}


function getSimpleCommitObject(commitData: CommitData): Commit {
  return {
    name: commitData.commit.author.name,
    date: new Date(commitData.commit.author.date)
  };
}
