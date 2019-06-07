import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../usuarios/usuario';
import { UsuariosService } from '../usuarios/usuarios.service';


@Injectable()
export class LoginServiceService {

  public showNavBarEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();
  
  private authenticated = false;

  constructor(private router: Router, private usuarioService: UsuariosService) { }

  users: Usuario[] = [];

  signin(usuario: Usuario) {
    
    this.usuarioService.getAll()
      .subscribe(data => this.users = data,
        err => alert('Aconteceu um erro.' + err)
      );
    var keepGoing = true;
    this.users.forEach(element => {
      if (keepGoing) {
        if ((usuario.email === element.email && usuario.password === element.password)) {
          this.authenticated = true;
          this.showNavBar(true);
          this.router.navigate(['/']);    
          keepGoing = false;
        }else {
          this.authenticated = false; 
        }
      }  
    });
    
    if (this.authenticated == false) {
      alert("Usuário ou Senha Inválidos");
    }
    /*if((user.email === 'user@gmail.com' && user.password === '123456')) {
      this.authenticated = true;
      this.showNavBar(true);
      this.router.navigate(['/']);
    }else {
      this.authenticated = false;
    }*/
  }
  
  logout() {
    this.authenticated = false;
    this.showNavBar(false);
    this.router.navigate(['/signin']);
  }

  isAuthenticated() {
    return this.authenticated;
  }

  private showNavBar(ifShow: boolean) {
    this.showNavBarEmitter.emit(ifShow);
  }

  
}
