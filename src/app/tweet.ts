export class Tweet {
  id: number;
  text: string;
  createdAt: number;
  numFavs: number;
  numRts: number;

  constructor() {
    this.text = '';
    this.createdAt = 0;
    this.numFavs = 0;
    this.numRts = 0;
  }
}
