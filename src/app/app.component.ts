import { Component, OnInit, ChangeDetectorRef, AfterViewInit, OnDestroy } from '@angular/core';
import { Router, RouterLink} from '@angular/router';
import { AccountService } from './_services';
import { ProductService } from './_services/productdetail.service';
import { User } from './_models';

@Component({ selector: 'app', templateUrl: 'app.component.html' })
export class AppComponent implements OnInit, OnDestroy {
    user: User;
    cartListCount: number;

    constructor(private accountService: AccountService, private router: Router,
        private productService: ProductService, private ref: ChangeDetectorRef) {
        this.accountService.user.subscribe(x => this.user = x);
    }

    ngOnInit(){
        //this.cartListCount = JSON.parse(sessionStorage.getItem("cartitems")).length;
        this.productService.cartItems.subscribe(items => {
            this.cartListCount = items.length;
            sessionStorage.setItem("cartitems", JSON.stringify([...items]));
        });
    }

    logout() {
        this.accountService.logout();
    }

    ngOnDestroy(){
        
    }
}