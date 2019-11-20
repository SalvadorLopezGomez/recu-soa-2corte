import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-autentication-twosteps',
  templateUrl: './autentication-twosteps.component.html',
  styleUrls: ['./autentication-twosteps.component.css']
})
export class AutenticationTwostepsComponent implements OnInit {

  constructor(private Service: AuthService, private router:Router) { }
  
  ngOnInit() {
  }

  onAuthtwoStepValidate(formAuthTwoStep: NgForm){
    var Email = this.Service.Email;
    var code = formAuthTwoStep.value.codigo;
    var datos;
    this.Service.serchEmailUser(Email).subscribe( result => {
      datos = result[0].payload.doc.data();
      var tas = datos.twoautenticate;
      if(tas == true){
        this.Service.searchCode(code).subscribe(
          response => {
            console.log(response.length);
            if(response.length == 0){
              this.router.navigate(['Home']);
            }else{
              console.log('ingrese un codigo valido')
            }
          })
      }else{
        console.log('auntenticacion en 2 pasos no esta activada en esta cuenta')
      }
    });
  }
}
