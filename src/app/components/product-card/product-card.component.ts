import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ProductItemsType} from "../../types/product-items.type";

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {


  @Input() product!: ProductItemsType;
  @Input() orderEl!: HTMLElement;
  @Input() scrollToFn!: (target: HTMLElement) => void;

  @Output() addToCard = new EventEmitter<{ product: ProductItemsType, target: HTMLElement }>();

  public onOrder(): void {
    if (this.scrollToFn && this.orderEl) {
      this.scrollToFn(this.orderEl);
    }

    this.addToCard.emit({
      product: this.product,
      target: this.orderEl,
    });
  }

}

