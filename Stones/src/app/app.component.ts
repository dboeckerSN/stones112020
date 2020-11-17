import { Component } from '@angular/core';
import { Product } from './product/product';

@Component({
  selector: 'stn-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Stones';

  public productParent = new Product(12, 'Granitstein Gravo', 134.56, 12);

  public onPriceChanged(price: number): void {
    alert('Neuer Preis: ' + price);
  }

  public changePrice(price: number): void {
    this.productParent.price = Number(price);
  }
}
