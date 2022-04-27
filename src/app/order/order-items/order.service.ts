import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Http, Headers, RequestOptions } from "@angular/http";
import 'rxjs/add/operator/map';

import { CartItem } from "app/restaurant-detail/shopping-cart/cart-item-model";
import { ShoppingCartService } from "app/restaurant-detail/shopping-cart/shopping-cart-service";
import { Order, OrderItem } from "../order.model";

import { MEAT_API } from "app/ap.api";

@Injectable()
export class OrderService {
    constructor(private cartService: ShoppingCartService, private http: Http) {
    }

    itemsValue(): number {
        return this.cartService.total();
    }

    cartItems(): CartItem[]{
        return this.cartService.items;
    }

    increaseQty(item: CartItem) {
        this.cartService.increaseQty(item);
    }

    decreaseQty(item: CartItem) {
        this.cartService.decreaseQty(item);
    }

    remove(item: CartItem) {
        this.cartService.removeItem(item);
    }

    checkOrder(order: Order): Observable<string> { 
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');

        return this.http
            .post(`${MEAT_API}/orders`, JSON.stringify(order), new RequestOptions({headers: headers}))
            .map(response => response.json())
            .map(order => order.id);
    }

    clear() {
        this.cartService.clear();
    }
}