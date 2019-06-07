import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuariosListComponent } from './usuarios-list/usuarios-list.component';
import { usuariosRouting } from './usuarios.routing';
import { UsuariosService } from './usuarios.service';

@NgModule({
  imports: [
    CommonModule, usuariosRouting
  ],
  declarations: [UsuariosListComponent],
  providers: [UsuariosService]
})
export class UsuariosModule { }
