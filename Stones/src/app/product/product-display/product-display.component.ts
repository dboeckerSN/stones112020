import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'stn-product-display',
  templateUrl: './product-display.component.html',
  styleUrls: ['./product-display.component.css']
})
export class ProductDisplayComponent implements OnInit {
  product: Product = new Product(1, 'Stein', 12, 32);

  constructor() {}

  ngOnInit(): void {}

  public raisePrice(): void {
    this.product.price += 5;
    window.alert('Preis erhöht');
  }
}
