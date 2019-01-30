import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
<<<<<<< HEAD
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
=======
  createDb() {
    const corporations = [
      { id: 1, name: 'ICBC', country: 'China', marketCap: '$311B' },
      { id: 2, name: 'China Construction Bank', country: 'China', marketCap: '$216.7B' },
      { id: 3, name: 'JP Morgan Cheese', country: 'USA', marketCap: '$387.67B' },
      { id: 4, name: 'Berkshire Hathaway', country: 'USA', marketCap: '$491.89B' },
      { id: 5, name: 'Agricultular Bank of China', country: 'China', marketCap: '$184.13B' },
      { id: 6, name: 'Bank of America', country: 'USA', marketCap: '$313.5B' },
      { id: 7, name: 'Wells Fargo', country: 'USA', marketCap: '$265.33B' },
      { id: 8, name: 'Apple', county: 'USA', marketCap: '$962.5B' }
    ];
    return {corporations};
>>>>>>> 8c5d43fd571c2789c295910c50d88791fb93eec8
  }
}
