import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ExtratoComponent } from './pages/extrato/extrato.component';
import { SaqueComponent } from './pages/saque/saque.component';
import { DepositoComponent } from './pages/deposito/deposito.component';
import { HomeComponent } from './pages/home/home.component';
import { LabelInputComponent } from './components/label-input/label-input.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { ButtonComponent } from './components/button/button.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClientesComponent } from './pages/cliente/cliente.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ContasComponent } from './pages/conta/conta.component';
import { CadastrarContasComponent } from './pages/conta/cadastrar-contas/cadastrar-contas.component';
import { CadastroEdicaoClientesComponent } from './pages/cliente/cadastro-edicao-clientes/cadastro-edicao-clientes.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ExtratoComponent,
    SaqueComponent,
    DepositoComponent,
    HomeComponent,
    LabelInputComponent,
    CheckboxComponent,
    ButtonComponent,
    ClientesComponent,
    ContasComponent,
    CadastroEdicaoClientesComponent,
    CadastrarContasComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
