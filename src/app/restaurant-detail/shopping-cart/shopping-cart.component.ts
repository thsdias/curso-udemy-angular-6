import { Component, OnInit } from '@angular/core';

import { ShoppingCartService } from './shopping-cart-service';

@Component({
  selector: 'mt-shopping-cart',
  templateUrl: './shopping-cart.component.html'
})
export class ShoppingCartComponent implements OnInit {

  constructor(private shoppingCartSevice: ShoppingCartService) { 
  }

  ngOnInit() {
  }

  items(): any[] {
    return this.shoppingCartSevice.items;
  }

  total(): number {
    return this.shoppingCartSevice.total();
  }

  clear() {
    this.shoppingCartSevice.clear();
  }

  removeItem(item: any) {
    this.shoppingCartSevice.removeItem(item);
  }

  addItem(item: any) {
    this.shoppingCartSevice.addItem(item);
  }
}
