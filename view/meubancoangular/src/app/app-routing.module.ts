import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarEditarClienteComponent } from './pages/cliente/cadastro-edicao-clientes/cadastro-edicao-clientes.component';
import { ClientesComponent } from './pages/cliente/cliente.component';
import { ContasComponent } from './pages/conta/conta.component';
import { DepositoComponent } from './pages/deposito/deposito.component';
import { ExtratoComponent } from './pages/extrato/extrato.component';
import { HomeComponent } from './pages/home/home.component';
import { SaqueComponent } from './pages/saque/saque.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full'},
  { path: 'extrato', component: ExtratoComponent },
  { path: 'saque', component: SaqueComponent },
  { path: 'deposito', component: DepositoComponent },
  { path: 'cliente', component: ClientesComponent },
  { path: 'cliente/cadastrar', component: CadastrarEditarClienteComponent},
  { path: 'cliente/editar/id', component: CadastrarEditarClienteComponent},
  { path: 'conta', component: ContasComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
