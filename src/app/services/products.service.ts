import {Injectable} from '@angular/core';
import {ProductItemsType} from "../types/product-items.type";
import {AdvantagesItemsType} from "../types/advantages-items.type";

@Injectable()
export class ProductsService {

  constructor() {
  }

  getProducts(): ProductItemsType[] {
    return [
      {
        image: 'products1.png',
        title: 'Макарун с малиной',
        quantity: '1 шт.',
        price: 1.70,
      },
      {
        image: 'products2.png',
        title: 'Макарун с манго',
        quantity: '1 шт.',
        price: 1.70,
      },
      {
        image: 'products3.png',
        title: 'Пирог с ванилью',
        quantity: '1 шт.',
        price: 1.70,
      },
      {
        image: 'products4.png',
        title: 'Пирог с фисташками',
        quantity: '1 шт.',
        price: 1.70,
      },
    ];
  }

  getAdvantagesItems(): AdvantagesItemsType[] {
    return [
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
    ]
  }

}
