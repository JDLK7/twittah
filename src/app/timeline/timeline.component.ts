import { Component, OnInit } from '@angular/core';
import { TweetService } from '../tweet.service';
import { Tweet } from '../tweet';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {

  tweets: Tweet[];

  constructor(
    private tweetService: TweetService
  ) { }

  ngOnInit() {
    this.fetchTweets();
  }

  fetchTweets(): void {
    this.tweetService.getTweets()
      .subscribe(tweets => this.tweets = tweets.slice(0, 9));
  }

}
