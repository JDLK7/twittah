import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TweetService } from '../tweet.service';
import { Tweet } from '../tweet';

@Component({
  selector: 'app-tweet-editor',
  templateUrl: './tweet-editor.component.html',
  styleUrls: ['./tweet-editor.component.css']
})
export class TweetEditorComponent implements OnInit {

  expanded = false;
  @Input() tweet = new Tweet;
  @Output() published = new EventEmitter();

  constructor(
    private tweetService: TweetService
  ) { }

  ngOnInit() {
  }

  publish(): void {
    this.tweet.createdAt = Math.floor(Date.now() / 1000);
    this.tweetService.addTweet(this.tweet)
      .subscribe();

    this.expanded = false;
    this.tweet = new Tweet;

    this.published.emit('tweetPublished');
  }

}
