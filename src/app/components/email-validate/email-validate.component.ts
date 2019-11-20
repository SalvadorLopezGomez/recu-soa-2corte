import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-email-validate',
  templateUrl: './email-validate.component.html',
  styleUrls: ['./email-validate.component.css']
})
export class EmailValidateComponent implements OnInit {

  constructor(private authSrc:AuthService, private router:Router) { }

  ngOnInit() {
  }

  onEmailValidate(formEmail: NgForm){
    var correo = formEmail.value.email;
    if(correo == null){
      Swal.fire({
        title:'campo requerido!',
        text: 'Se requiere el correo',
        icon: 'error',
        confirmButtonText: 'aceptar'
      });
    }else{
      this.search(correo);
    }
    
  }

  search(correo){
    if(correo != null){
      this.authSrc.serchEmailUser(correo).subscribe(result => {
        console.log(result.length)
        if(result.length == 0 ){
          Swal.fire({
            title:'Lo siento!',
            text: 'No se ha encontrado el Correo',
            icon: 'warning',
            confirmButtonText: 'aceptar'
          });
        }else{
          this.router.navigate(['user/forgotpassword']);
        }
      });
    }
  }

}
