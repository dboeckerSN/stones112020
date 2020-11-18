import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from '../custom-validators';
import { Product } from '../product';

@Component({
  selector: 'stn-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  @Output() saveProduct = new EventEmitter<Product>();

  public productForm = new FormGroup({
    name: new FormControl('', [Validators.required, CustomValidators.alphaNum]),
    price: new FormControl('', [Validators.required, CustomValidators.positiv]),
    weight: new FormControl(),
  });

  constructor() { }

  ngOnInit(): void {
  }

  public save(): void {
    this.saveProduct.emit({id: 1 , ...this.productForm.value});
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
