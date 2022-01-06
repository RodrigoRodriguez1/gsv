import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AreaClienteComponent } from './pages/area-cliente/area-cliente.component';
import { PedidoDetalhadoComponent } from './pages/area-cliente/pedido-detalhado/pedido-detalhado.component';
import { AtendimentoComponent } from './pages/atendimento/atendimento.component';
import { CarrinhoComponent } from './pages/carrinho/carrinho.component';
import { ClothingComponent } from './pages/clothing/clothing.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { MetodosPagamentoComponent } from './pages/metodos-pagamento/metodos-pagamento.component';
import { PagarMpComponent } from './pages/metodos-pagamento/pagar-mp/pagar-mp.component';
import { PaginanaoencontradaComponent } from './pages/paginanaoencontrada/paginanaoencontrada.component';
import { ProdutoDetalheComponent } from './pages/produto-detalhe/produto-detalhe.component';
import { RegisterComponent } from './pages/register/register.component';
import { SneakersComponent } from './pages/sneakers/sneakers.component';
import { UsedComponent } from './pages/used/used.component';


const routes: Routes = [

   { path: '', component: HomeComponent,pathMatch: 'full'  },
   { path: 'tenis/:marca', component: SneakersComponent},
   { path: 'vestuario', component: ClothingComponent},
   { path: 'usados', component: UsedComponent},
   { path: 'login', component: LoginComponent},
   { path: 'register', component: RegisterComponent},
   { path: 'area-cliente', component: AreaClienteComponent},
   { path: 'carrinho', component: CarrinhoComponent},
   { path: 'metodo', component: MetodosPagamentoComponent},
   { path: 'produto-detalhado/:id/:nome/:preco/:quantidade/:imagem', component: ProdutoDetalheComponent },
   { path: 'atendimento', component: AtendimentoComponent},
   { path: 'pedido-detalhado', component: PedidoDetalhadoComponent},
   { path: 'produto', component: ProdutoDetalheComponent},
   { path: 'pagar-mp', component: PagarMpComponent},

   { path: '**', component: PaginanaoencontradaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
