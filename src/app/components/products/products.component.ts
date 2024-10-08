import { Component, inject, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Istore } from '../../models/istore';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ImgstyleDirective } from '../../directives/imgstyle.directive';
import { Data, RouterLink } from '@angular/router';
import { ProductStaticService } from '../../sevices/product-static.service';
import { log } from 'console';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, NgFor, NgIf, FormsModule, ImgstyleDirective,RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent implements OnChanges ,OnInit {
  // product:Istore //as {}
  product: Istore[]; //as [{},{}]

  showImg: boolean = true;

  prddata: string = 'product';

  date1: string = '4 9 sep';

  
  constructor(public prdService: ProductStaticService) {        //1
    // this.product={
    //   productName:"Galaxy A15 Dual Sim Blue",
    //   productproductId:1,
    //   productPrice:200,
    //   productQuantity:1,
    //   productDetailes:"Display: The screen keeps going. Enjoy your favorite games, movies and content with the vast, 6.5-inch HD+ display",
    //   productImgUrl:"https://f.nooncdn.com/p/pnsku/N70029835V/45/_/1706611090/c8f22b46-f214-441b-bd7f-e0c3dd63a544.jpg?format=avif&wproductIdth=240"
    // }
    //Day2///////////////////////////////////////////////////////////////
    // this.product = [
    //   {
    //     productId: 1,
    //     productName: 'Apple iPhone 15',
    //     productImgUrl:
    //       'https://f.nooncdn.com/p/pnsku/N53432547A/45/_/1694762192/fd45d583-8af9-4ff3-8032-af4a5a3c553c.jpg?format=avif&wproductIdth=240',
    //     productQuantity: 20,
    //     productPrice: 200,
    //     categoryproductId: 1,
    //     productDetails:
    //       'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem  lorem lorem lorem lorem lorem lorem  ',
    //   },
    //   {
    //     productId: 12,
    //     productName: 'Samsung Galaxy frontend ',
    //     productImgUrl:
    //       'https://f.nooncdn.com/p/pnsku/N70030440V/45/_/1702699238/6ae73ece-d29e-4a81-ba41-850055d0937f.jpg?format=avif&wproductIdth=240',
    //     productQuantity: 20,
    //     productPrice: 200,
    //     categoryproductId: 2,
    //     productDetails:
    //       'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem  lorem lorem lorem lorem lorem lorem  ',
    //   },
    //   {
    //     productId: 31,
    //     productName: 'Apple iPhone 13',
    //     productImgUrl:
    //       'https://f.nooncdn.com/p/v1686205682/N50838986A_1.jpg?format=avif&wproductIdth=240',
    //     productQuantity: 0,
    //     productPrice: 200,
    //     categoryproductId: 1,
    //     productDetails:
    //       'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem  lorem lorem lorem lorem lorem lorem  ',
    //   },
    //   {
    //     productId: 21,
    //     productName: 'Samsung Galaxy ',
    //     productImgUrl:
    //       'https://f.nooncdn.com/p/pnsku/N70035206V/45/_/1712239207/3e7c97e2-cf7d-48ee-b324-a5d4aa30efe8.jpg?format=avif&wproductIdth=240',
    //     productQuantity: 1,
    //     productPrice: 200,
    //     categoryproductId: 2,
    //     productDetails:
    //       'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem  lorem lorem lorem lorem lorem lorem  ',
    //   },
    //   {
    //     productId: 11,
    //     productName: 'OPPO Reno 12F 5G ',
    //     productImgUrl:
    //       'https://f.nooncdn.com/p/pnsku/N70093960V/45/_/1721457134/54d5b998-81c6-4fdd-9b0e-eca01f6979b7.jpg?format=avif&wproductIdth=240',
    //     productQuantity: 20,
    //     productPrice: 200,
    //     categoryproductId: 2,
    //     productDetails:
    //       'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem  lorem lorem lorem lorem lorem lorem  ',
    //   },
    //   {
    //     productId: 51,
    //     productName: 'iphone',
    //     productImgUrl:
    //       'https://f.nooncdn.com/p/v1640152217/N52217824A_1.jpg?format=avif&wproductIdth=240',
    //     productQuantity: 20,
    //     productPrice: 200,
    //     categoryproductId: 2,
    //     productDetails:
    //       'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem  lorem lorem lorem lorem lorem lorem  ',
    //   },
    //   {
    //     productId: 61,
    //     productName: 'iphone',
    //     productImgUrl:
    //       'https://f.nooncdn.com/p/pnsku/N70085224V/45/_/1721894952/91270228-e30b-484e-ae2a-3e746b194bb2.jpg?format=avif&wproductIdth=240',
    //     productQuantity: 20,
    //     productPrice: 200,
    //     categoryproductId: 3,
    //     productDetails:
    //       'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem  lorem lorem lorem lorem lorem lorem  ',
    //   },
    //   {
    //     productId: 81,
    //     productName: 'Reno 11F',
    //     productImgUrl:
    //       'https://f.nooncdn.com/p/pnsku/N70063654V/45/_/1713704986/b06f55f9-03d1-4021-8b06-da23bc27e60d.jpg?format=avif&wproductIdth=240',
    //     productQuantity: 20,
    //     productPrice: 200,
    //     categoryproductId: 1,
    //     productDetails:
    //       'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem  lorem lorem lorem lorem lorem lorem  ',
    //   },
    //   {
    //     productId: 661,
    //     productName: 'iphone',
    //     productImgUrl:
    //       'https://f.nooncdn.com/p/v1640152217/N52217824A_1.jpg?format=avif&wproductIdth=240',
    //     productQuantity: 20,
    //     productPrice: 200,
    //     categoryproductId: 1,
    //     productDetails:
    //       'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem  lorem lorem lorem lorem lorem lorem  ',
    //   },
    // ];

    //Day4////////////////////////////////////////

    this.product = this.prdService.getAllProduct(); //[{},{},{}]
    console.log('product', this.product);
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');  
  }
  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }

  showImgToggle() {
    this.showImg = !this.showImg;
  }
}
