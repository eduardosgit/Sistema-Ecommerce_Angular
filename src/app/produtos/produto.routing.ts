import { Routes, RouterModule } from '@angular/router';
import { ProdutoListComponent } from './produto-list/produto-list.component';
//import { ProdutoFormComponent } from '../produto-form/produto-form.component';

const PRODUTO_ROUTES: Routes = [
    {
        path: '',
        component: ProdutoListComponent
    }
];

export const produtosRouting = RouterModule.forChild(PRODUTO_ROUTES);