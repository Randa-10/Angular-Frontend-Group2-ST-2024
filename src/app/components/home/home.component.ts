import { Component } from '@angular/core';
import { Track } from '../../models/track';
import { CommonModule, NgFor } from '@angular/common';
import { NavbarComponent } from "../navbar/navbar.component";
import { ImgstyleDirective } from '../../directives/imgstyle.directive';
import { Istore } from '../../models/istore';
import { ProductStaticService } from '../../sevices/product-static.service';
import { ProductsComponent } from '../products/products.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, NgFor, NavbarComponent , ImgstyleDirective,ProductsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
 
  trackProperty!:Track    //as a type


  productHome:Istore[]
  constructor(public prd:ProductStaticService ){
    this.trackProperty=new Track("Frontend","ITI Sohag",["Js","Es","Angular"],2)

this.productHome=this.prd.getAllProduct()

  }


}
