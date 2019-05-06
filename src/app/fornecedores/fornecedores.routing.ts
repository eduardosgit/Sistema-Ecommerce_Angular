import { Routes, RouterModule } from '@angular/router';
import { FornecedorListComponent } from './fornecedor-list/fornecedor-list.component';
import { FornecedorFormComponent } from './fornecedor-form/fornecedor-form.component';
import { FornecedorCrudComponent } from './fornecedor-crud/fornecedor-crud.component';

const FORNECEDOR_ROUTES: Routes = [
    {
        path: '', component: FornecedorCrudComponent
    },
    {
        path: ':id', component: FornecedorCrudComponent
    }
];

export const fornecedoresRouting = RouterModule.forChild(FORNECEDOR_ROUTES);