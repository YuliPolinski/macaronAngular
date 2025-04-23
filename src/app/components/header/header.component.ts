import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() phoneNumber!: string;
  @Input() scrollToFn: (target: HTMLElement) => void = () => {};
  @Input() productsEl!: HTMLElement;
  @Input() advantagesEl!: HTMLElement;
  @Input() orderEl!: HTMLElement;

  scrollToSection(target: HTMLElement): void {
    this.scrollToFn(target);
  }

  constructor() { }

  ngOnInit(): void {

  }

}
