import { Component } from '@angular/core';
import { Track } from '../../models/track';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
 
  trackProperty!:Track    //as a type

  constructor(){
    this.trackProperty=new Track("Frontend","ITI Sohag",["Js","Es","Angular"],2)

// [{},{}]

  }


}
