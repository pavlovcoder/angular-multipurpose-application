import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
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
  }
}
