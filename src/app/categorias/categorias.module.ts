import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriaListComponent } from './categoria-list/categoria-list.component';
import { categoriasRouting } from './categoria.routing';
import { FormsModule } from '@angular/forms';
import { CategoriasService } from './categorias.service';

@NgModule({
  imports: [
    CommonModule, categoriasRouting, FormsModule
  ],
  declarations: [CategoriaListComponent],
  providers: [CategoriasService]
})
export class CategoriasModule { }
