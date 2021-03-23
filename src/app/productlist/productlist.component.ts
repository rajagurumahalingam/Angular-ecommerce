import { Component, OnInit, NO_ERRORS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';
import { IProducts } from '../products';
import { ProductService } from '../_services/productdetail.service';
import { Subject } from 'rxjs';
declare var $: any;

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {

  products: IProducts[];
  upproducts: IProducts[] = [];
  //selectedProduct : Subject<any> = new Subject;
  total:number = 0;
  delit:number = 0;

  constructor(private router: Router, private productService: ProductService) { 
    this.products = this.productService.getproductlist();
   }

  ngOnInit() {
    this.totalPrice();
  }

  getpopup(product) {
    this.productService.selectedProduct.next(product);
    $("#productinfoModal").modal('show');
  }

  delpopup(pid){
    console.log(pid);
    for(var i=0;i<this.products.length;i++){
      if(this.products[i].product_id === pid)
      {  
        this.products.splice(i,1);
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

  showproductdetail(id){
    this.router.navigateByUrl('products/'+ id);
  }

}
