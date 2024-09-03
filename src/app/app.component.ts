import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from "./components/footer/footer.component";
import { HomeComponent } from './components/home/home.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ProductsComponent } from './components/products/products.component';

//meta-data 

@Component({ 
  selector: 'app-root', 
  standalone: true,    //v17, v18 
  imports: [RouterOutlet, NavbarComponent,ProductsComponent, FooterComponent,HomeComponent,SidebarComponent],  
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'Angular-project-frontendG2';


}
