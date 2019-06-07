import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { RoutingModule } from './app.router';
import { LoginComponent } from './login/login/login.component';
import { LoginServiceService } from './login/login-service.service';
import { AuthGuard } from './login/login/login-guard';
import { UsuariosService } from './usuarios/usuarios.service';
//import { ClienteFormComponent } from './clientes/cliente-form/cliente-form.component';
//import { AlertaService } from './alerta.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    LoginComponent
    //ClienteFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    LoginServiceService,
    UsuariosService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})

/* @Component({
  constructor(private service: AlertaService) { }
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  enviarMsg(): void {
    this.service.msgAlerta();
  }
}) */
export class AppModule { }
