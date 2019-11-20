import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { FormsModule } from '@angular/forms';
import { environment } from '../environments/environment';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AuthService } from './services/auth.service';
import { ConfirmAccountComponent } from './components/confirm-account/confirm-account.component';
import { RegisterValidateComponent } from './components/register-validate/register-validate.component';
import { EmailValidateComponent } from './components/email-validate/email-validate.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AutenticationTwostepsComponent } from './components/autentication-twosteps/autentication-twosteps.component';
import { AutenticationValidateComponent } from './components/autentication-validate/autentication-validate.component';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    NotfoundComponent,
    ConfirmAccountComponent,
    RegisterValidateComponent,
    EmailValidateComponent,
    HomeComponent,
    NavbarComponent,
    AutenticationTwostepsComponent,
    AutenticationValidateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
  ],
  providers: [AngularFireAuth, AuthService, AngularFirestore,],
  bootstrap: [AppComponent]
})
export class AppModule { }
