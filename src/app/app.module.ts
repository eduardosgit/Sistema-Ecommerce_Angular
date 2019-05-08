import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { RoutingModule } from './app.router';
//import { ClienteFormComponent } from './clientes/cliente-form/cliente-form.component';
//import { AlertaService } from './alerta.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent
    //ClienteFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RoutingModule
  ],
  providers: [],
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
