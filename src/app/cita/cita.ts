import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cita',
  standalone: false,
  templateUrl: './cita.html',
  styleUrl: './cita.css'
})
export class Cita {
 cita = {
    idCita: 0,
    nombrePaciente: '',
    tipoEspecialidad: '',
    numeroDeConsultorio: 1,
    fechaHora: ''
  };

  guardarCita() {
    // Aquí puedes conectar a una API si quieres
    Swal.fire('Cita registrada', JSON.stringify(this.cita, null, 2), 'success');
  }
}

