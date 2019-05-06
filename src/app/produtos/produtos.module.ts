import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutoListComponent } from './produto-list/produto-list.component';
//import { ProdutoFormComponent } from '../produto-form/produto-form.component';
import { produtosRouting } from './produto.routing';
import { FormsModule } from '@angular/forms';
import { ProdutosService } from './produtos.service';
import { ProdutoFormComponent } from './produto-form/produto-form.component';

@NgModule({
  imports: [
    CommonModule, produtosRouting, FormsModule
  ],
  declarations: [ProdutoListComponent, ProdutoFormComponent],
  providers: [ProdutosService]
})
export class ProdutosModule { }
