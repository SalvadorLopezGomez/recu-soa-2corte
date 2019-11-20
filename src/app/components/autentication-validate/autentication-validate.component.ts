import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-autentication-validate',
  templateUrl: './autentication-validate.component.html',
  styleUrls: ['./autentication-validate.component.css']
})
export class AutenticationValidateComponent implements OnInit {

  constructor(private router:Router, private Service: AuthService) { }
  ngOnInit() {
  }

  iraLogin(){
    this.router.navigate(['user/login']);
  }
}
