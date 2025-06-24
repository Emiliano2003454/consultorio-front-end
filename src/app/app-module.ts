import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { App } from './app';
import { Login } from './login/login';
import { FormsModule } from '@angular/forms';
import { Cita } from './cita/cita';
import { RouterModule, Routes } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  { path: 'cita', component: Cita },
  { path: 'login', component: Login },
  { path: '', redirectTo: 'cita', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    App,
    Login,
    Cita,
    Navbar
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    RouterModule,
    HttpClientModule
  ],

  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [Login]
})
export class AppModule { }
