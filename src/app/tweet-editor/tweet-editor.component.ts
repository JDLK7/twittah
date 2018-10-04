import { Component, OnInit, Input } from '@angular/core';
import { TweetService } from '../tweet.service';
import { Tweet } from '../tweet';

@Component({
  selector: 'app-tweet-editor',
  templateUrl: './tweet-editor.component.html',
  styleUrls: ['./tweet-editor.component.css']
})
export class TweetEditorComponent implements OnInit {

  expanded: boolean;
  @Input() tweet: Tweet;

  constructor(
    private tweetService: TweetService
  ) {
    this.expanded = false;
    this.tweet = new Tweet;
  }

  ngOnInit() {
  }

  publish(): void {
    this.tweet.createdAt = Math.floor(Date.now() / 1000);
    this.tweetService.addTweet(this.tweet)
      .subscribe();

    this.expanded = false;
    this.tweet = new Tweet;
  }

}
