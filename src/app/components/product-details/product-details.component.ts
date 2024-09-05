import { Component } from '@angular/core';
import { ProductStaticService } from '../../sevices/product-static.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { log } from 'console';
import { Istore } from '../../models/istore';
import { Location } from '@angular/common';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
})
export class ProductDetailsComponent {
  currId: number = 0;
  oneProductItem!: Istore | null; //  {interface}

  constructor(
    public productDetails: ProductStaticService,
    public active: ActivatedRoute,
    public location: Location
  ) {
    this.currId = Number(this.active.snapshot.paramMap.get('idFromUrl')); //number from url

    console.log(this.currId);

    this.oneProductItem = this.productDetails.getProductByID(this.currId);

    console.log(this.oneProductItem);
  }

  goBack() {
    this.location.back();
  }
}
