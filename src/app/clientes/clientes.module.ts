import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteListComponent } from './cliente-list/cliente-list.component';
import { ClienteFormComponent } from '../cliente-form/cliente-form.component';
import { clientesRouting } from './cliente.routing';
import { FormsModule } from '@angular/forms';
import { ClientesService } from './clientes.service';

@NgModule({
  imports: [
    CommonModule, clientesRouting, FormsModule
  ],
  //declarations: [ClienteListComponent], [ClienteFormComponent], 
  declarations: [ClienteFormComponent], 
  providers: [ClientesService]
})
export class ClientesModule { }
