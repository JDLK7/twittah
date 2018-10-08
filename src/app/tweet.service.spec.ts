import { TestBed, inject, getTestBed } from '@angular/core/testing';

import { TweetService } from './tweet.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Tweet } from './tweet';

describe('TweetService', () => {

  let injector: TestBed;
  let service: TweetService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TweetService]
    });
    injector = getTestBed();
    service = injector.get(TweetService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => { httpMock.verify(); });

  it('should be created', inject([TweetService], (service: TweetService) => {
    expect(service).toBeTruthy();
  }));

  it('#getTweets should return an Observable<Tweet[]>', () => {
    const expectedTweets = [
      { id: 1, text: 'Test tweet', createdAt: 1538665264, numFavs: 1, numRts: 2 },
      { id: 2, text: 'Test tweet2', createdAt: 1538665264, numFavs: 0, numRts: 0 },
    ];

    service.getTweets().subscribe(tweets => {
      expect(tweets.length).toBe(2);
      expect(tweets).toEqual(expectedTweets);
    });

    const req = httpMock.expectOne('api/tweets');
    expect(req.request.method).toBe('GET');
    req.flush(expectedTweets);
  });

  it('#updateTweet should return an Observable<Tweet>', () => {
    const expectedTweet = { id: 1, text: 'Test tweet', createdAt: 1538665264, numFavs: 0, numRts: 0 };

    service.updateTweet(expectedTweet).subscribe(tweet => {
      expect(tweet).toEqual(expectedTweet);
    });

    const req = httpMock.expectOne('api/tweets');
    expect(req.request.method).toBe('PUT');
    req.flush(expectedTweet);
  });

  it('#addTweet should return an Observable<Tweet>', () => {
    const expectedTweet = new Tweet;
    expectedTweet.text = 'Test tweet';
    expectedTweet.createdAt = 1538665264;

    service.addTweet(expectedTweet).subscribe(tweet => {
      expect(tweet).toEqual(expectedTweet);
    });

    const req = httpMock.expectOne('api/tweets');
    expect(req.request.method).toBe('POST');
    req.flush(expectedTweet);
  });

});
