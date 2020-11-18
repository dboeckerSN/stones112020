import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'stn-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  public products: Observable<Product[]>;
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.products = this.productService.getList();
  }

  public onPriceChanged(price: number): void {
    alert('Neuer Preis: ' + price);
  }

}
