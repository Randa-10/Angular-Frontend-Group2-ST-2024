import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
//meta-data
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink]  ,    //RouterModule
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

}
