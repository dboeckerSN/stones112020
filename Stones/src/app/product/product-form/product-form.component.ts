import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from '../custom-validators';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'stn-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  public nameLength = 0;

  public productForm = new FormGroup({
    name: new FormControl('', [Validators.required, CustomValidators.alphaNum]),
    price: new FormControl('', [Validators.required, CustomValidators.positiv]),
    weight: new FormControl(),
  });

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productForm.get('name').valueChanges.subscribe(
      data => this.nameLength = data.length,
    );
  }

  public save(): void {
    this.productService.newProduct({id: 1 , ...this.productForm.value});
    /*
    this.saveProduct.emit({
      id: 1,
      name: this.productForm.get('name').value,
      price: this.productForm.get('price').value,
      weight: this.productForm.get('weight').value,
    });*/
    /*
    this.saveProduct.emit({
      id: 1,
      name: this.productForm.value.name,
      price: this.productForm.value.price,
      weight: this.productForm.value.weight,
    });*/
  }

}
