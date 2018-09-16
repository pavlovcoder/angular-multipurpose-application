import { ApplicationRef, Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Model } from './repository.model';
import { Product } from './product.model';
import { ProductFormGroup } from './form.model';
import { HEROES } from './heroes';
import { Observable, interval } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Component({
  selector: "app",
  templateUrl: "template.html",
  styleUrls: ['./component.css']
})

export class ProductComponent {
  public birthday: any = new Date(2019, 2, 5);
  public motherBirthday: any = new Date(2019, 6, 16);
  public model: Model = new Model();
  public form: ProductFormGroup = new ProductFormGroup();
  public toggle = true;
  public power = 10;
  public factor = 3;
  public heroes: any[] = [];
  public canFly = true;
  public message$: Observable<string>;
  private messages = [
    'You are my hero!',
    'You are the best hero!',
    'Will you be my hero ?'
  ];


  constructor(ref: ApplicationRef) {
    (<any>window).appRef = ref;
    (<any>window).model = this.model;
    this.reset();
  }

  public pBackColor = "#C01C9D";

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

  public getValidationMessages(state: any, thingName: string) {
    let thing: string = state.path || thingName;
    let messages: string[] = [];

    if (state.errors) {
      for (let errorName in state.errors) {
        switch (errorName) {
          case 'required':
            messages.push(`You must enter a ${thing}`);
            break;
          case 'minlength':
            messages.push(`A ${thing} must be at least ${state.errors['minlength'].requiredLength} characters.`);
            break;
          case 'pattern':
            messages.push(`The ${thing} contains illegal characters.`);
            break;
        }
      }
    }
    return messages;
  }

  public formSubmitted: boolean = false;

  public submitForm(form: NgForm) {
    console.log('Form was submitted!');
    this.formSubmitted = true;

    if (form.valid) {
      this.addProduct(this.newProduct);
      this.newProduct = new Product();
      form.reset();
      this.formSubmitted = false;
    }
  }

  public getFormValidationMessages(form: NgForm): string[] {
    let messages: string[] = [];
    Object.keys(form.controls).forEach(k => {
      this.getValidationMessages(form.controls[k], k).forEach(m => messages.push(m));
    });
    return messages;
  }

  public get format() {
    return this.toggle ? 'shortDate' : 'fullDate';
  }

  public toggleFormat(): void {
    this.toggle = !this.toggle;
    console.log(this.toggle);
  }

  public addHero(name: string): void {
    name = name.trim();
    if (!name) { return; }
    const hero = {
      name,
      canFly: this.canFly
    };
    this.reset();
    this.heroes.push(hero);
  }

  public reset(): void {
    this.heroes = HEROES.slice();
  }

  public resend(): void {
    this.message$ = interval(500).pipe(
      map(i => this.messages[i]),
        take(this.messages.length)
      );
    }
}
