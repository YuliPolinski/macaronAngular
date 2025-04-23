import {AfterViewInit, Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {AdvantagesItemsType} from "../../types/advantages-items.type";
import {ProductsService} from "../../services/products.service";

@Component({
  selector: 'app-advantages',
  templateUrl: './advantages.component.html',
  styleUrls: ['./advantages.component.scss']
})
export class AdvantagesComponent implements OnInit, AfterViewInit{

  constructor(private ProductService: ProductsService) {
  }

  public advantagesItems: AdvantagesItemsType[] = [];

  @ViewChild('advantagesEl') advantagesEl!: ElementRef;
  @ViewChild('root', { static: true }) root!: ElementRef<HTMLElement>;
  @Output() elementReady = new EventEmitter<ElementRef<HTMLElement>>();


  ngOnInit(): void {
    this.advantagesItems = this.ProductService.getAdvantagesItems();
  }
  ngAfterViewInit(): void {
    this.elementReady.emit(this.root);
  }
}
