import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FornecedorListComponent } from './fornecedor-list/fornecedor-list.component';
import { FornecedorFormComponent } from './fornecedor-form/fornecedor-form.component';
import { fornecedoresRouting } from './fornecedores.routing';
import { FormsModule } from '@angular/forms';
import { FornecedoresService } from './fornecedores.service';
import { FornecedorCrudComponent } from './fornecedor-crud/fornecedor-crud.component';
import { clientesRouting } from 'app/clientes/cliente.routing';

@NgModule({
  imports: [
    CommonModule, fornecedoresRouting, FormsModule
  ],
  declarations: [FornecedorListComponent, FornecedorFormComponent, FornecedorCrudComponent, FornecedorFormComponent, FornecedorCrudComponent],
  providers: [FornecedoresService]
})
export class FornecedoresModule { }
