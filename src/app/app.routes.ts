import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { MainComponent } from './components/main/main.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';

export const routes: Routes = [

//localhost:4200
// {path:'',redirectTo:"home",pathMatch:"full"},   //localhost:4200
// {path:'home',component:HomeComponent,title:"home page"},    //url localhost:4200/home
// {path:'products',component:ProductsComponent,title:"product page"},    //url localhost:4200/products

// //wild card

// {path:'**',component:NotfoundComponent}




//============================////


{path:'',component:MainComponent,children:[
 {path:'',redirectTo:"home",pathMatch:"full"},   //localhost:4200
{path:'home',component:HomeComponent,title:"home page"},    //url localhost:4200/home
{path:'products',component:ProductsComponent,title:"product page"},    //url localhost:4200/products
//  name/:text  //1,3,2
{path:'products/:idFromUrl',component:ProductDetailsComponent ,title:" "}
]},

{path:'**',component:NotfoundComponent}

];
