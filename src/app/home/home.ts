import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Navbar } from '../navbar/navbar';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, Navbar],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
