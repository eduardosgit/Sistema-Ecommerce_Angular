import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'clientes',
        loadChildren: 'app/clientes/clientes.module#ClientesModule'
    },
    {
        path: 'categorias',
        loadChildren: 'app/categorias/categorias.module#CategoriasModule'
    }
];

export const RoutingModule = RouterModule.forRoot(routes);