import { CartService } from './../services/cart.service';
import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input('product') product;
  @Input('show-actions') showActions= true;
  @Input('shopping-cart') shoppingCart;
  constructor(private cartservice: CartService) {
  }
  addToCart() {
    this.cartservice.addToCart(this.product);
  }

  ngOnInit() {
  }

}
