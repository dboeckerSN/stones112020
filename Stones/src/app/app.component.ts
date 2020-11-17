import { Component } from '@angular/core';
import { Product } from './product/product';

@Component({
  selector: 'stn-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Stones';

  public productParent = new Product(1, 'Stein', 12, 32);

  public onPriceChanged(price: number): void {
    alert('Neuer Preis: ' + price);
  }
}
