import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Tweet } from './tweet';

export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const tweets = [
      { id: 1, text: 'Very nice', createdAt: 1538665264, numFavs: 1, numRts: 2 },
      { id: 2, text: 'I hate my life', createdAt: 1538665264, numFavs: 0, numRts: 0 },
      { id: 3, text: 'OMG', createdAt: 1538665264, numFavs: 4, numRts: 1 },
      { id: 4, text: 'Jesus Christ', createdAt: 1538665264, numFavs: 512, numRts: 100 },
      { id: 5, text: 'Has comprado leche xd', createdAt: 1538665264, numFavs: 0, numRts: 1 },
    ];

    return { tweets };
  }

  getId(tweets: Tweet[]): number {
    return tweets.length > 0 ? Math.max(...tweets.map(tweet => tweet.id)) + 1 : 1;
  }

}
