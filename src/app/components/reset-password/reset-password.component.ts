import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  constructor(private services: AuthService, private router:Router) { }

  ngOnInit() {
    console.log(this.services.EmailValor)
  }

  onChangePass(formPass: NgForm){
    var datos;
    var continuar = true;

    var antpassword = formPass.value.Antpassword;
    var newpassword = formPass.value.Newpassword
      this.services.serchEmailUser(this.services.EmailValor).subscribe(result => {
        this.services.desactivarLogin()
        datos = result[0].payload.doc.data();
        console.log('reset password',antpassword);
        console.log('reset Datapassword', datos.password);
        if(continuar==true){
          if(antpassword == datos.password){
            continuar = false;
            console.log('reset datos',datos);
            var id = result[0].payload.doc.id;
            datos.password = newpassword;
            console.log('reset datos',datos);
            this.services.updateUser(datos, id).then(
              res => {
                this.router.navigate(['Home']);
              });
          }else{
            console.log('la contraseña es incorrecta');
          }
        }
      });
  }
}


