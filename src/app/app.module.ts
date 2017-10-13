import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UserService } from './services/user.service'
import { AuthguardGuard } from './authguard.guard'


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';

/*
Habilito las rutas, para ello llamo al modulo Routes
*/
import { RouterModule, Routes } from '@angular/router';

const appRoutes : Routes = [
  {
    path : '',
    component : LoginFormComponent
  },
  {
    path : 'dashboard',
    canActivate : [AuthguardGuard],
    component : DashboardComponent    
  },

  // De cualquier otra forma que no se haya establecido la regla ira al login
  {
    path : '**',
    redirectTo : ''
  }
] 

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginFormComponent,
    DashboardComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule
  ],
  providers: [
    UserService,
    AuthguardGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
