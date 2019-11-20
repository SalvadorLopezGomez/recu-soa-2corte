import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { Usuarios } from '../../models/usuarios.model';
import { ActivarCuenta } from '../../models/activar-cuenta.model';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) { }

  usuarios: Usuarios[];

  public email: string = '';
  public password: string = '';

  ngOnInit() {
  }

  newUser(registerForm: NgForm){
    this.email = registerForm.value.email;

    console.log(this.email)
    this.authService.serchEmailUser(this.email).subscribe(
      responese => {
        if(responese.length == 0){
          this.authService.createUser(registerForm.value).then(
            res => {
              this.router.navigate(['user/confirm/account']);
            });
        }else{
          Swal.fire({
            title:'Correo usado!',
            text: 'ya existe una cuenta con este correo',
            icon: 'warning',
            confirmButtonText: 'aceptar'
          });
        }
    });
  }
}
