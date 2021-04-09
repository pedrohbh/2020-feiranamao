import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserGuard } from './guards/user.guard';
import { HomeComponent } from './home/home.component';
import { LojasComponent } from './lojas/lojas.component';
import { ProdutoComponent } from './produto/produto.component';
import { LoginComponent } from './login/login.component';
import { DefaultComponent } from './default/default.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { CartComponent } from './cart/cart.component'
import { AdminLojaComponent } from './admin-loja/admin-loja.component';

const routes: Routes = [
  { path: '', component: DefaultComponent, canActivate: [UserGuard],
    children: [
      { path: 'page-home', component: HomeComponent },
      { path: 'page-lojas', component: LojasComponent },
      { path: 'page-loja/:id', component: ProdutoComponent },
      { path: 'page-usuario', component: UsuarioComponent },
      { path: 'page-cart', component: CartComponent },
      { path: 'admin-loja', component: AdminLojaComponent },
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
