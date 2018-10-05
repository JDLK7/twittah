import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Tweet } from './tweet';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class TweetService {

  private tweetsUrl = 'api/tweets';

  constructor(
    private http: HttpClient
  ) { }

  private log(message: string) {
    console.log(message);
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  getTweets(): Observable<Tweet[]> {
    return this.http.get<Tweet[]>(this.tweetsUrl)
      .pipe(
        catchError(this.handleError('getTweets', []))
      );
  }

  addTweet(tweet: Tweet): Observable<Tweet> {
    return this.http.post<Tweet>(this.tweetsUrl, tweet, httpOptions)
      .pipe(
        tap((tweet: Tweet) => this.log(`${tweet.createdAt} Published tweet ${tweet.id} with text: "${tweet.text}"`)),
        catchError(this.handleError<Tweet>('addTweet'))
      );
  }

  updateTweet(tweet: Tweet): Observable<Tweet> {
    return this.http.put<Tweet>(this.tweetsUrl, tweet, httpOptions)
      .pipe(
        tap(_ => this.log(`Updated tweet ${tweet.id} with text: "${tweet.text}"`)),
        catchError(this.handleError<any>('updateTweet'))
      );
  }

}
