import { Product } from './product.model';

export class SimpleDataSource {
  private data: Product[];

  constructor() {
    this.data = new Array<Product> (
      new Product(1, 'Skate board', 'Water sports', 20),
      new Product(2, 'Scuba tank', 'Water sports', 564),
      new Product(3, 'Scuba diver', 'Water sports', 1211),
      new Product(4, 'Ball', 'Football', 15),
      new Product(5, 'Football boots', 'Football', 45)
    )
  }

    getData(): Product[] {
      return this.data;
    }
}