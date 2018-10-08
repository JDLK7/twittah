import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { TweetEditorComponent } from '../tweet-editor/tweet-editor.component';
import { TimelineComponent } from './timeline.component';
import { TweetComponent } from '../tweet/tweet.component';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

describe('TimelineComponent', () => {
  let component: TimelineComponent;
  let fixture: ComponentFixture<TimelineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TweetEditorComponent,
        TimelineComponent,
        TweetComponent,
      ],
      imports: [
        ButtonModule,
        FormsModule,
        CardModule,
        HttpClientModule,
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
