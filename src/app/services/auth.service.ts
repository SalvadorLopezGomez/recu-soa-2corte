import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Usuarios } from '../models/usuarios.model';
import * as crypto from 'crypto-js'; 

@Injectable()
export class AuthService {

  selectedUser = Usuarios;
  public EmailValor;
  public Email;
  public id_profile;
  public ActiveComponentLogin;
  public AuthTwoSteps = false;

  constructor(private db: AngularFirestore) {}

  getUsers() {
    this.db.collection('usuarios').valueChanges();
  }

  getProfile(id) {
    return this.db.collection('usuarios').doc(id).snapshotChanges();
  }

  createUser(usuarios: Usuarios){
    usuarios.status = 0;
    usuarios.twoautenticate = false;
    usuarios.codigo = 0;
    console.log('create - ', usuarios)
    let token = usuarios.correo + "" + usuarios.nombre;
    usuarios.token = crypto.SHA512(token).toString();
    console.log(usuarios);
    return this.db.collection('usuarios').add(usuarios);
  }

  updateUser(usuarios, id){
    console.log('id - ',id)
    return this.db.collection('/usuarios').doc(id).set(usuarios);
  }

  activarLogin(){
    this.ActiveComponentLogin=1;
  }

  desactivarLogin(){
    this.ActiveComponentLogin=0;
  }

  serchUser(token){
    return this.db.collection('/usuarios', ref =>
     ref.where('token', '==',token)).snapshotChanges();
  }

  serchEmailUser(correo){
    this.EmailValor = correo
    return this.db.collection('/usuarios', ref =>
     ref.where('correo', '==',correo)).snapshotChanges();
  }

  loginUser(email, password, id){
    this.id_profile = id;
    this.Email = email;
    return this.db.collection('/usuarios', ref =>
     ref.where('correo', '==',email).where('password','==',password)).snapshotChanges();
  }

  searchCode(codigo){
    return this.db.collection('/usuarios', ref =>
     ref.where('codigo', '==',codigo)).snapshotChanges();
  }
}
