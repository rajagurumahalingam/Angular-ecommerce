import { Component, OnInit, Input, ViewChild, ElementRef, ChangeDetectorRef  } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { Subject } from 'rxjs';
import { ProductService } from '../_services/productdetail.service';
declare var $: any;

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})

export class ProductdetailsComponent implements OnInit {

  @Input() selectedProduct: any;
  productId: String;
  selectedproduct: any;
  cartcount: number;
  products: any;
  total:number = 0;

  constructor(private activatedRoute: ActivatedRoute, private productService: ProductService,
    private router: Router, private ref: ChangeDetectorRef) {
      this.products = this.productService.getproductlist;
     }

  ngOnInit() {
    console.log("nowthis", this.selectedProduct);
    this.productService.selectedProduct.subscribe(item => {
      this.selectedproduct = item;
    })
    //this.productlist = this.productService.getproductlist();
    //this.productId = this.activatedRoute.snapshot.params.id;

    /*for(var i=0;i<this.productlist.length;i++){
      if(this.productlist[i].product_id === this.productId)
      {  
        this.selectedproduct = this.productlist[i]
      }           
    }*/

    
  }

  add(pid){
    console.log(pid);
    for(var i=0;i<this.products.length;i++){
      if(this.products[i].product_id === pid)
      {  
        this.products[i].product_quality += 1;
      }
    }
    this.totalPrice();
    console.log(this.products);
  }

  del(pid){
    console.log(pid);
    for(var i=0;i<this.products.length;i++){
      if(this.products[i].product_id === pid)
      {  
        this.products[i].product_quality -= 1;
      }           
    }
    this.totalPrice();
    console.log(this.products);
  }

  totalPrice(){
    this.total = 0;
    for(var i=0;i<this.products.length;i++){
      this.total += (this.products[i].product_price * this.products[i].product_quality);
    }
  }

  addtocrt(){
      let cartlist = [];
      console.log("selecctedd", this.selectedproduct);

      this.productService.cartItems.subscribe(cartitms => {
        cartlist = [...cartitms];
      });

      this.productService.cartItems.next([...cartlist, this.selectedproduct]);
      this.router.navigateByUrl('products');
  }
}
