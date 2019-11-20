import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service'
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private autenticationActive;

  constructor(private services: AuthService, private router: Router) { }
  public perfil = [];
  public dato;
  public authTwo;
  public data;
  public id;
  public ValidCode;

  ngOnInit() {
    this.id = this.services.id_profile;
    if(this.id != null){
      this.services.getProfile(this.id).subscribe((result) => {
        this.data = result.payload.data()
        this.dato = this.data;
        this.autenticationActive = this.dato.twoautenticate;
          if(this.perfil.length == 0){
            this.perfil.push(this.data)
          }
      });
    }
  }

  twostep(){
    this.services.desactivarLogin()
    var codigo = Math.floor((Math.random() * (10000 - 1111)) + 1111);
    console.log('codigo --> ',codigo)

    if(this.data.codigo == codigo){
      console.log('codigo existente - generando otro');
      this.twostep();
    }else{
      this.data.codigo = codigo;
      this.data.twoautenticate = true;
      this.services.updateUser(this.data, this.id).then(
        result => {
          console.log('codigo enviado')
          console.log('datos',this.data)
        }).catch(err => {
          console.log(err);
        })
    }
  }
}
