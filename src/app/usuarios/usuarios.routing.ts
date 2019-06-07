import { Routes, RouterModule } from '@angular/router';
import { UsuariosListComponent } from './usuarios-list/usuarios-list.component';

const USUARIO_ROUTES: Routes = [
    {
        path: '', component: UsuariosListComponent
    },
    {
        path: ':id', component: UsuariosListComponent
    }
];

export const usuariosRouting = RouterModule.forChild(USUARIO_ROUTES);