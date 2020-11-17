import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'stn-product-display',
  templateUrl: './product-display.component.html',
  styleUrls: ['./product-display.component.css']
})
export class ProductDisplayComponent implements OnInit {
  @Input() public product: Product;
  @Output() public priceChange = new EventEmitter<number>();

  public showWeight = true;
  public styleConfig: any = {
    borderStyle: 'dashed'
  };

  constructor() {}

  ngOnInit(): void {}

  public raisePrice(): void {
    this.product.price += 5;
    this.priceChange.emit(this.product.price);
  }

  public lowerPrice(): void {
    this.product.price -= 5;
  }

  public toggleWeight(): void {
    this.showWeight = !this.showWeight;
  }
}
