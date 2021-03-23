import { Component, OnInit, DoCheck } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { ProductService } from '../_services/productdetail.service';

@Component({
    selector: 'cart-productdetails',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit, DoCheck {

    cartlistIds= [];
    cartItems = [];
    cartListCount: number;
    productlist: any;
    title: String;
    newctitem: Subscription;
    notavailableflag: boolean = false;
    notavailabletxt: String;

    constructor(private productService: ProductService) { }

    ngOnInit() {
        
        this.notavailabletxt = "You have not selected any Product to show. Please select some.";

        this.productlist = this.productService.getproductlist();
          //this.cartItems = JSON.parse(sessionStorage.getItem("cartitems"));
          this.title = "Cart Page";
          this.productService.cartItems.subscribe(items => {
            this.cartItems = items;
        })
          console.log("cartItems", this.cartItems);
          if(this.cartItems.length > 0){
            this.notavailableflag = false;
        } else {
            this.notavailableflag = true;
        }
       
    }

    ngDoCheck(){
        if(this.cartItems.length > 0){
            this.notavailableflag = false;
        } else {
            this.notavailableflag = true;
        }
    }

    removeitem(product_id){
        // this.cartItems = this.cartItems.filter(item => {
        //     return item.product_id != product_id 
        // });
        for(var i=0;i<this.cartItems.length;i++){
            if(this.cartItems[i].product_id == product_id)
            {
              this.cartItems.splice(i, 1);
              break;
            }           
        }
        
        sessionStorage.setItem("cartitems", JSON.stringify([...this.cartItems]));
        this.productService.cartItems.next([...this.cartItems]);
    }
}
