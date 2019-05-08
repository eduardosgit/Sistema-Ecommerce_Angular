import { Routes, RouterModule } from '@angular/router';
import { CategoriaCrudComponent } from './categoria-crud/categoria-crud.component';

const CATEGORIA_ROUTES: Routes = [
    { 
        path: '', component: CategoriaCrudComponent
    },
    {
        path: ':id', component: CategoriaCrudComponent
    }
];

export const categoriasRouting = RouterModule.forChild(CATEGORIA_ROUTES);