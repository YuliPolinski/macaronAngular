import {Component, ViewChild, ElementRef, OnInit} from '@angular/core';
import {ProductItemsType} from "./types/product-items.type";
import {ProductsService} from "./services/products.service";
import {CartService} from "./services/cart.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {


  constructor(private ProductsService: ProductsService,
              public CartService: CartService) {
  }


  public productsItems: ProductItemsType[] = [];
  public advantagesRef!: HTMLElement;

  public formValues = {
    productTitle: '',
    name: '',
    phone: '',
  };

  ngOnInit() {
    this.productsItems = this.ProductsService.getProducts();
  }

  public scrollTo(target: HTMLElement): void {
    target.scrollIntoView({behavior: 'smooth'});
  }

  // public addToCard(product: ProductItemsType, target: HTMLElement): void {
  //   this.scrollTo(target);
  //   this.formValues.productTitle = product.title.toUpperCase();
  //   this.CartService.count++;
  //   this.CartService.totalPrice += product.price;
  //   alert(`${product.title} добавлен в корзину!`);
  // }

  public addToCard(event: { product: ProductItemsType, target: HTMLElement }): void {
    this.scrollTo(event.target);
    this.formValues.productTitle = event.product.title.toUpperCase();
    this.CartService.count++;
    this.CartService.totalPrice += event.product.price;
    alert(`${event.product.title} добавлен в корзину!`);
  }

  public get totalStr(): string {
    return this.CartService.totalPrice.toFixed(2).replace('.', ',');
  }

  public createOrder(): void {
    if (!this.formValues.productTitle) {
      alert('Выберите товар');
      return;
    }
    if (!this.formValues.name) {
      alert('Введите имя');
      return;
    }
    if (!this.formValues.phone) {
      alert('Введите номер телефона');
      return;
    }

    alert(`Заказ успешно оформлен`);

    this.formValues = {
      productTitle: '',
      name: '',
      phone: '',
    }
  }

  public showPopup: boolean = false;
  public phoneNumber: string = '375293689868';
  public instagramLink: string = 'https://www.instagram.com/';

  @ViewChild('productsEl') productsEl!: ElementRef<HTMLElement>;
  @ViewChild('advantagesEl') advantagesEl!: ElementRef<HTMLElement>;
  @ViewChild('orderEl') orderEl!: ElementRef<HTMLElement>;

  public headerData: any = null;

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.headerData = {
        phoneNumber: this.phoneNumber,
        instagramLink: this.instagramLink,
        scrollToFn: this.scrollTo.bind(this),
        productsEl: this.productsEl?.nativeElement,
        advantagesEl: this.advantagesEl?.nativeElement,
        orderEl: this.orderEl?.nativeElement,
      };
    });
  }

}
