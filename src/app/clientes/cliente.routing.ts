import { Routes, RouterModule } from '@angular/router';
import { ClienteListComponent } from './cliente-list/cliente-list.component';
import { ClienteFormComponent } from '../cliente-form/cliente-form.component';

const CLIENTE_ROUTES: Routes = [
    { 
        path: '',
        component: ClienteFormComponent
    }
];

export const clientesRouting = RouterModule.forChild(CLIENTE_ROUTES);