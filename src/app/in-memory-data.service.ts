import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  public createDb(): any {
    const corporations = [
      { position: 1, name: 'Walmart', revenue: '$500 billion', country: 'USA' },
      { position: 2, name: 'State Grid', revenue: '$349 billion', country: 'China' },
      { position: 3, name: 'Sinopec Group', revenue: '$327 billion', country: 'China' },
      { position: 4, name: 'China National Petroleum', revenue: '$326 billion', country: 'China' },
      { position: 5, name: 'Royal Dutch Shell', revenue: '$312 billion', country: 'Netherlands, UK' },
      { position: 6, name: 'Toyota Motor', revenue: '$265 billion', country: 'Japan' }
    ];
    return { corporations };
  }
}
