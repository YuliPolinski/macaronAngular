import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {AdvantagesItemsType} from "../../types/advantages-items.type";
import {ProductsService} from "../../services/products.service";

@Component({
  selector: 'app-advantages',
  templateUrl: './advantages.component.html',
  styleUrls: ['./advantages.component.scss']
})
export class AdvantagesComponent implements OnInit {

  constructor(private ProductService: ProductsService) {
  }

  public advantagesItems: AdvantagesItemsType[] = [];

  @ViewChild('advantagesEl') advantagesEl!: ElementRef;
  @Output() elementReady = new EventEmitter<ElementRef>();

  ngOnInit(): void {
    this.advantagesItems = this.ProductService.getAdvantagesItems();
  }
}
