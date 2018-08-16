import { ApplicationRef, Component } from '@angular/core';
import { Model } from './repository.model';
import { Product } from './product.model';

@Component({
  selector: "app",
  templateUrl: "template.html"
})

export class ProductComponent {
  model: Model = new Model();

  constructor(ref: ApplicationRef) {
    (<any>window).appRef = ref;
    (<any>window).model = this.model;
  }

  getClasses(): string {
    return this.model.getProducts().length == 5 ? "alert alert-success alert-dismissible fade show my-4" : "alert alert-warning alert-dismissible fade show my-4";
  }

  getClasses2(key: number): string {
    let product = this.model.getProduct(key);
    return "p-1 " + (product.price < 50 ? "bg-info" : "bg-warning");
  }

  getClassMap(key: number): Object {
    let product = this.model.getProduct(key);
    return {
      'alert-warning': product.name == 'Skate Board',
      'alert-success': product.price < 50
    };
  }

  getStyles(key: number) {
    let product = this.model.getProduct(key);
    return {
      fontSize: "40px",
      "margin.px": 120,
      color: product.price > 50 ? "hsl(0, 80, 60)" : "hsl(100, 80, 60)" 
    };
  }

  getProductByPosition(position: number): Product {
    return this.model.getProducts()[position];
  }

  getClassesByPosition(position: number): string {
    let product = this.getProductByPosition(position);
    return "p-1 alert " + (product.price < 50 ? "alert-info" : "alert-warning");
  }

  fontSizeWithUnits: string = "30px";
  fontSizeWithoutUnits: string = "30";

  getProduct(key: number): Product {
    return this.model.getProduct(key);
  }

  getProducts(): Product[] {
    return this.model.getProducts();
  }

  getProductCount(): number {
    return this.getProducts().length;
  }

  getKey(index: number, product: Product) {
    return product.id;
  }

  get nextProduct(): Product {
    return this.model.getProducts().shift();
  }

  getProductPrice(index: number): string {
    let result = `Price after rounding ${Math.floor(this.getProduct(index).price)}`;
    return result;
  }

  targetName: string = 'Ship';

  counter: number = 1;

  public selectedProduct: string;

  public getSelected(product: Product): boolean {
    return product.name == this.selectedProduct;
  }

  public newProduct: Product = new Product();

  public get jsonProduct() {
    return JSON.stringify(this.newProduct);
  } 

  public addProduct(p: Product) {
    console.log(`New product ${this.jsonProduct}`);
  }
}