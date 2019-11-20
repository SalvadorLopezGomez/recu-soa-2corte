import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2'
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  constructor(private services:AuthService, private router:Router) { }

  ngOnInit() {
  }
  onChangePass(formPass: NgForm){
    var Data;
    var password = formPass.value.password;
    var passwordcf = formPass.value.passwordCnf
    if(password == null && passwordcf == null || password == null || passwordcf == null){
      Swal.fire({
        title:'Campo requerido!',
        text: 'Se requiere el campo',
        icon: 'warning',
        confirmButtonText: 'aceptar'
      });
    }else if(password == passwordcf){
      this.services.serchEmailUser(this.services.EmailValor).subscribe(result => {
        Data = result[0].payload.doc.data()
        console.log(Data);
        var id = result[0].payload.doc.id;
        Data.password = passwordcf;
        console.log(Data);
        this.services.updateUser(Data, id).then(
          res => {
            this.router.navigate(['Home']);
          }
        );
      });
    }else{
      Swal.fire({
        title:'Error!',
        text: 'Las contraseñas no coinciden',
        icon: 'error',
        confirmButtonText: 'aceptar'
      });
    }
  }
}
