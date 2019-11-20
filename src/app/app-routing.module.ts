import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { ConfirmAccountComponent } from './components/confirm-account/confirm-account.component';
import { RegisterValidateComponent } from './components/register-validate/register-validate.component'
import { NotfoundComponent } from './components/notfound/notfound.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { EmailValidateComponent } from './components/email-validate/email-validate.component';
import { HomeComponent } from './components/home/home.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { AutenticationTwostepsComponent } from './components/autentication-twosteps/autentication-twosteps.component';
import { AutenticationValidateComponent } from './components/autentication-validate/autentication-validate.component';
import { from } from 'rxjs';


const routes: Routes = [
  {path: 'Home', component:HomeComponent},
  {path: 'user/login', component: SigninComponent},
  {path: 'user/register', component: SignupComponent},
  {path: 'user/confirm/account', component: RegisterValidateComponent},
  {path: 'user/confirm/:token', component: ConfirmAccountComponent},
  {path: 'user/forgotpassword', component:ForgotPasswordComponent},
  {path: 'user/emailvalidate', component:EmailValidateComponent},
  {path: 'user/resetpassword', component:ResetPasswordComponent},
  {path: 'user/twosteps/autentication', component:AutenticationTwostepsComponent},
  {path: 'autentication/twostep', component: AutenticationValidateComponent},
  {path: '**', component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
