import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario';
import { UsuariosService } from '../usuarios.service';

@Component({
  selector: 'app-usuarios-list',
  templateUrl: './usuarios-list.component.html',
  styleUrls: ['./usuarios-list.component.css']
})
export class UsuariosListComponent implements OnInit {

  constructor(private usuarioService: UsuariosService) { }

  usuarios: Usuario[] = [];

  ngOnInit() {
    this.usuarioService.getAll()
      .subscribe(data => this.usuarios = data,
        err => alert('Aconteceu um erro.' + err)
      );

    this.usuarioService.usuariosChanged.subscribe(
      (Observable: any) => Observable.subscribe(
        data => this.usuarios = data
      )
    );
  }      
}
