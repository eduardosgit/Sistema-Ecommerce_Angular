import { Routes, RouterModule } from '@angular/router';
import { CategoriaListComponent } from './categoria-list/categoria-list.component';

const CATEGORIA_ROUTES: Routes = [
    { 
        path: '',
        component: CategoriaListComponent
    }
];

export const categoriasRouting = RouterModule.forChild(CATEGORIA_ROUTES);