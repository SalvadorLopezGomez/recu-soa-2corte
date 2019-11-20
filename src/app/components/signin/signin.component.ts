import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from "firebase/app";
import { Router } from "@angular/router";
import { AuthService } from '../../services/auth.service';
import { Usuario } from '../../services/usuario';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  constructor(private authService: AuthService, private router:Router) { }
  usuario: Usuario = new Usuario();
  public email: string = '';
  public password: string = '';
  ngOnInit() {
    this.authService.activarLogin();
  }

  onLogin(loginForm: NgForm){
    this.email = loginForm.value.email;
    this.password = loginForm.value.password;

    if(this.email == null && this.password == null || this.email == null || this.password == null){
      Swal.fire({
        title:'campo requerido!',
        text: 'No puede haber campos vacios',
        icon: 'error',
        confirmButtonText: 'aceptar'
      });
    }else{
      this.validateUser(this.email, this.password);
    }
  }

  validateUser(email, password){
    var Data;
    
    this.authService.serchEmailUser(email).subscribe(result => {
      if(result.length == 0 ){
        Swal.fire({
          title:'Lo siento!',
          text: 'Esta cuenta no existe',
          icon: 'warning',
          confirmButtonText: 'aceptar'
        });
      }else{
        if(this.authService.ActiveComponentLogin == 1){
        Data = result[0].payload.doc.data();
        this.authService.desactivarLogin();
        if(Data.status == 1){
          console.log('login password',password);
          console.log('login Datapassword', Data.password);
            if(password == Data.password){
              this.authService.loginUser(email, password, result[0].payload.doc.id);
              if(Data.twoautenticate == true){
                this.router.navigate(['user/twosteps/autentication']);
              }else{
                this.router.navigate(['Home']);
              }
            }else{
              Swal.fire({
                title:'Contraseña Incorrecta!',
                text: 'Ingrese nuevamente la contraseña-',
                icon: 'error',
                confirmButtonText: 'aceptar'
              });
          }
        }else if(Data.status == 0){
          Swal.fire({
            title:'Lo siento!',
            text: 'Esta cuenta no esta activada',
            icon: 'warning',
            confirmButtonText: 'aceptar'
          });
        }  
      }
    }
    });
  }
}
