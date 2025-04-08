import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import {AdvantagesItemsType} from "./types/advantages-items.type";
import {ProductItemsType} from "./types/product-items.type";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  public advantagesItems: AdvantagesItemsType[] = [
    {
      numberItem: '1',
      titleItem: 'Лучшие продукты',
      textItem: 'Мы честно готовим макаруны только из натуральных и качественных продуктов. Мы не используем консерванты, ароматизаторы и красители.'
    },
    {
      numberItem: '2',
      titleItem: 'Много вкусов',
      textItem: 'Наша задача – предоставить вам широкое разнобразие вкусов. Вы удивитесь, но у нас более 70 вкусов пироженок.'
    },
    {
      numberItem: '3',
      titleItem: 'Бисквитное тесто',
      textItem: 'Все пирожные готовятся на бисквитном тесте с качественным сливочным маслом 82,5%. В составе нет маргарина и дрожжей!'
    },
    {
      numberItem: '4',
      titleItem: 'Честный продукт',
      textItem: 'Вкус, качество и безопасность наших пирогов подтверждена декларацией о соответствии, которую мы получили 22.06.2016 г.'
    },
  ];

  public productsItems: ProductItemsType[] = [
    {
      image: 'products1.png',
      title: 'Макарун с малиной',
      quantity: '1 шт.',
      price: '1,70 руб.',
    },
    {
      image: 'products2.png',
      title: 'Макарун с манго',
      quantity: '1 шт.',
      price: '1,70 руб.',
    },
    {
      image: 'products3.png',
      title: 'Пирог с ванилью',
      quantity: '1 шт.',
      price: '1,70 руб.',
    },
    {
      image: 'products4.png',
      title: 'Пирог с фисташками',
      quantity: '1 шт.',
      price: '1,70 руб.',
    },
  ];

  public formValues = {
    productTitle: '',
    name: '',
    phone: '',
  };

  public scrollTo(target: HTMLElement): void {
    target.scrollIntoView({behavior: 'smooth'});
  }

  public addToCard(product: ProductItemsType, target: HTMLElement): void {
    this.scrollTo(target);
    this.formValues.productTitle = product.title.toUpperCase();
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
  public phoneNumber: string = '+375 (29) 368-98-68';
  public instagramLink: string = 'https://www.instagram.com/';

  @ViewChild('productsEl') productsEl!: ElementRef;
  @ViewChild('advantagesEl') advantagesEl!: ElementRef;
  @ViewChild('orderEl') orderEl!: ElementRef;

  public headerData: any = null;

  ngAfterViewInit(): void {
    this.headerData = {
      phoneNumber: this.phoneNumber,
      instagramLink: this.instagramLink,
      scrollToFn: this.scrollTo.bind(this),
      productsEl: this.productsEl.nativeElement,
      advantagesEl: this.advantagesEl.nativeElement,
      orderEl: this.orderEl.nativeElement,
    };
  }

}
