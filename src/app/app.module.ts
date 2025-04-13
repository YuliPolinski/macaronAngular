import { LOCALE_ID, NgModule } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import localeRu from '@angular/common/locales/ru';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localeRu, 'ru');

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule} from "@angular/forms";
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {ProductsService} from "./services/products.service";
import { AdvantagesComponent } from './components/advantages/advantages.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ButtonHoverDirective } from './directives/button-hover.directive';
import { ReplaceRubPipe } from './pipes/replaceRub.pipe';
import { TruncateTextPipe } from './pipes/truncate-text.pipe';
import { PhoneFormatPipe } from './pipes/phone-format.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AdvantagesComponent,
    ProductCardComponent,
    ButtonHoverDirective,
    ReplaceRubPipe,
    TruncateTextPipe,
    PhoneFormatPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    ProductsService,
    { provide: LOCALE_ID, useValue: 'ru' }
  ],

  bootstrap: [AppComponent]
})
export class AppModule {
}
