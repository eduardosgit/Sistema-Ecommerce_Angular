import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './login/login/login-guard';
import { LoginComponent } from './login/login/login.component';


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
        loadChildren: 'app/clientes/clientes.module#ClientesModule',
        canActivate: [AuthGuard]
    },
    {   path: 'signin',
        component: LoginComponent
    },
    {
        path: 'categorias',
        loadChildren: 'app/categorias/categorias.module#CategoriasModule',
        canActivate: [AuthGuard]
    },
    {
        path: 'produtos',
        loadChildren: 'app/produtos/produtos.module#ProdutosModule',
        canActivate: [AuthGuard]
    },
    {
        path: 'fornecedores',
        loadChildren: 'app/fornecedores/fornecedores.module#FornecedoresModule',
        canActivate: [AuthGuard]
    },
    {
        path: 'usuarios',
        loadChildren: 'app/usuarios/usuarios.module#UsuariosModule',
        canActivate: [AuthGuard]
    }
];

export const RoutingModule = RouterModule.forRoot(routes);