import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ProductService{
    public productlist;
    public cartItems = new BehaviorSubject([]);
    public selectedProduct = new BehaviorSubject([]); 

    constructor(){
      if(sessionStorage.getItem("cartitems")){
       let cartlist = JSON.parse(sessionStorage.getItem("cartitems"));
       // sessionStorage.setItem("cartitems", JSON.stringify(cartlist));
       this.cartItems.next(cartlist);
      }
    }

    getproductlist(){
        return this.productlist = [
            {
              product_id : "pd100",
              product_img : "https://rukminim1.flixcart.com/image/312/312/j7hxmkw0/computer/b/g/j/hp-na-laptop-original-imaexq9fgzxzhmas.jpeg?q=70",
              product_name : "Laptop",
              product_price : 30000,
              product_details : "Lenovo Ideapad 320E Core i5 7th Gen - (4 GB/1 TB HDD/Windows 10 Home/2 GB Graphics) IP 320-15IKB Laptop  (15.6 inch, Onyx Black, 2.2 kg)",
              product_quality : 3
            },
            {
              product_id : "pd101",
              product_img : "https://4.imimg.com/data4/BB/RH/MY-15241145/multimedia-mobile-phone-500x500.jpg",
              product_name : "Mobile",
              product_price : 54000,
              product_details : "Stunning visuals on a 15.2-cm (5.99) FHD+ display, a powerful 1.8 GHz Snapdragon 636 processor, and expandable memory of up to 128 GB - the Redmi Note 5 Pro has much to offer. The (12 MP + 5 MP) dual rear camera setup and a 20 MP front camera, coupled with features such as Beautify 4.0, let you take truly beautiful pictures and selfies.",
              product_quality : 5
            },
            {
              product_id : "pd102",
              product_img : "https://pisces.bbystatic.com/image2/BestBuy_US/en_US/images/abn/2014/tvv/cat/tv/tv_size4a.jpg;maxHeight=333;maxWidth=333",
              product_name : "Television",
              product_price : 22000,
              product_details : "Bring home the Mi LED Smart TV 4A 108 cm (43) and delight your senses with crisp images and rich audio quality. It features Full HD LED Display that gives you crystal clear visuals while the Stereo Speakers make for immersive sound quality, leaving no room for a dull moment.",
              product_quality : 6
            },
            {
              product_id : "pd103",
              product_img : "https://rukminim1.flixcart.com/image/312/312/j6gs6fk0/headphone/z/d/h/apple-beats-solo3-original-imaewxpd7eqgqqvq.jpeg?q=70",
              product_name : "Headphone",
              product_price : 1300,
              product_details : "Enjoy enhanced and immersive listening experience by investing in these Sony headphones. The pair is designed for you to enjoy the powerful bass and clear sound. They are durable and can handle rough use as well.",
              product_quality : 13
            },
            {
              product_id : "pd104",
              product_img : "https://rukminim1.flixcart.com/image/312/312/j7hxmkw0/computer/b/g/j/hp-na-laptop-original-imaexq9fgzxzhmas.jpeg?q=70",
              product_name : "Laptop",
              product_price : 30000,
              product_details : "Lenovo Ideapad 320E Core i5 7th Gen - (4 GB/1 TB HDD/Windows 10 Home/2 GB Graphics) IP 320-15IKB Laptop  (15.6 inch, Onyx Black, 2.2 kg)",
              product_quality : 3
            },
            {
              product_id : "pd105",
              product_img : "https://4.imimg.com/data4/BB/RH/MY-15241145/multimedia-mobile-phone-500x500.jpg",
              product_name : "Mobile",
              product_price : 54000,
              product_details : "Stunning visuals on a 15.2-cm (5.99) FHD+ display, a powerful 1.8 GHz Snapdragon 636 processor, and expandable memory of up to 128 GB - the Redmi Note 5 Pro has much to offer. The (12 MP + 5 MP) dual rear camera setup and a 20 MP front camera, coupled with features such as Beautify 4.0, let you take truly beautiful pictures and selfies.",
              product_quality : 5
            },
            {
              product_id : "pd106",
              product_img : "https://pisces.bbystatic.com/image2/BestBuy_US/en_US/images/abn/2014/tvv/cat/tv/tv_size4a.jpg;maxHeight=333;maxWidth=333",
              product_name : "Television",
              product_price : 22000,
              product_details : "Bring home the Mi LED Smart TV 4A 108 cm (43) and delight your senses with crisp images and rich audio quality. It features Full HD LED Display that gives you crystal clear visuals while the Stereo Speakers make for immersive sound quality, leaving no room for a dull moment.",
              product_quality : 6
            },
            {
              product_id : "pd107",
              product_img : "https://rukminim1.flixcart.com/image/312/312/j6gs6fk0/headphone/z/d/h/apple-beats-solo3-original-imaewxpd7eqgqqvq.jpeg?q=70",
              product_name : "Headphone",
              product_price : 1300,
              product_details : "Enjoy enhanced and immersive listening experience by investing in these Sony headphones. The pair is designed for you to enjoy the powerful bass and clear sound. They are durable and can handle rough use as well.",
              product_quality : 13
            }
          ];
    }
    
    
}

