import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { Usuarios } from '../../models/usuarios.model';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-confirm-account',
  templateUrl: './confirm-account.component.html',
  styleUrls: ['./confirm-account.component.css']
})
export class ConfirmAccountComponent implements OnInit {

  constructor(private _route: ActivatedRoute, private Scr: AuthService, private router: Router) { }

  ngOnInit() {
  }

  activar(){
    var id_collection, token, Data, status;

    token = this._route.snapshot.params.token;
    console.log("valor del token --> ", token);
    this.Scr.serchUser(token).subscribe(result => {
        Data = result[0].payload.doc.data()
        console.log(Data);
        id_collection = result[0].payload.doc.id;
        console.log('ID: ',id_collection);
        Data.status = 1;
        console.log(Data);
        this.Scr.updateUser(Data, id_collection).then(
          res => {
            this.router.navigate(['user/login']);
          }
        );
      });
  }


}
