import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { LoginService } from '../Service/login-service';

@Component({
  selector: 'app-login',
  standalone:false,
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class Login{
  validUsers: any;
  username: string = '';
  password: string = '';
  tipoLogin: string = '';
  nombreLogin: string = '';
  isRegisterMode: boolean | undefined;

  constructor(private loginService: LoginService){}



  registrarUsuario() {

  const nuevoLogin = {
    idLogin:1,
    usuario:this.username,
    password:this.password,
    tipoLogin:this.tipoLogin,
    nombreLogin:this.nombreLogin
  };

  this.loginService.guardarLogin(nuevoLogin).subscribe({
    next: (data) => {
        Swal.fire({
          icon: 'success',
          title: 'Registro exitoso',
          text: 'Se guardo correctamente el usuario :'+data.usuario
        });
      },
      error: () => {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Error al guardar el usuario'
        });
      }
  });
  }

  iniciaSesion(){
    const iniciaLogin = {
    usuario:this.username,
    password:this.password,
  };

  this.loginService.buscarLogin(iniciaLogin).subscribe({
    next: (data) => {
        Swal.fire({
          icon: 'success',
          title: 'Login correcto',
          text: 'Se ha iniciado sesion con el usuario :'+data.usuario
        });
      },
      error: () => {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Error al iniciar sesion'
        });
      }
  });

  }


  toggleMode() {
    this.isRegisterMode = !this.isRegisterMode;
  }
}

