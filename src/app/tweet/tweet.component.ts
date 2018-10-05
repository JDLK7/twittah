import { Component, OnInit, Input } from '@angular/core';
import { TweetService } from '../tweet.service';
import { Tweet } from '../tweet';

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.css']
})
export class TweetComponent implements OnInit {

  @Input() tweet: Tweet;
  isEditing: boolean;

  constructor(
    private tweetService: TweetService
  ) {
    this.isEditing = false;
  }

  ngOnInit() {
  }

  update() {
    return this.tweetService.updateTweet(this.tweet)
      .subscribe();
  }

}
