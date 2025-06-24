  import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
  import { NavigationEnd, Router, RouterModule } from '@angular/router';

  @Component({
    selector: 'app-navbar',
    standalone :false,
    templateUrl: './navbar.html',
    styleUrls: ['./navbar.css']
  })
  export class Navbar {
    currentRoute: string = '';

  navLinks = [
    { path: '/cita', label: 'Citas', icon: 'bi bi-calendar-check' },
    { path: '/recetas', label: 'Recetas', icon: 'bi bi-file-earmark-text' },
    { path: '/pago', label: 'Pago', icon: 'bi bi-credit-card' }
  ];

  constructor(private router: Router) {
     this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.urlAfterRedirects;
      }
    });
  }
  }
