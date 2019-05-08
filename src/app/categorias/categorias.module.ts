import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriaListComponent } from './categoria-list/categoria-list.component';
import { categoriasRouting } from './categoria.routing';
import { FormsModule } from '@angular/forms';
import { CategoriasService } from './categorias.service';
import { CategoriaCrudComponent } from './categoria-crud/categoria-crud.component';
import { CategoriaFormComponent } from './categoria-form/categoria-form.component';

@NgModule({
  imports: [
    CommonModule, categoriasRouting, FormsModule
  ],
  declarations: [CategoriaListComponent, CategoriaCrudComponent, CategoriaFormComponent],
  providers: [CategoriasService]
})
export class CategoriasModule { }
