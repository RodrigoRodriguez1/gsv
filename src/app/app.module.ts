import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
// import { NgxMaskModule, IConfig } from 'ngx-mask';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './pages/nav/nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './pages/home/home.component';
import { SneakersComponent } from './pages/sneakers/sneakers.component';
import { FooterComponent } from './pages/footer/footer.component';
import { ClothingComponent } from './pages/clothing/clothing.component';
import { UsedComponent } from './pages/used/used.component';
import { LoginComponent } from './pages/login/login.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import {
  MatIconModule,
  MatInputModule,
} from '@angular/material';
import { RegisterComponent } from './pages/register/register.component';
import { MaterialModule } from './modules/material/material.module';
import { AreaClienteComponent } from './pages/area-cliente/area-cliente.component';
import { CarrinhoComponent } from './pages/carrinho/carrinho.component';
import { MetodosPagamentoComponent } from './pages/metodos-pagamento/metodos-pagamento.component';
import { PedidoDetalhadoComponent } from './pages/area-cliente/pedido-detalhado/pedido-detalhado.component';
import { ProdutoDetalheComponent } from './pages/produto-detalhe/produto-detalhe.component';
import { MatCarouselModule } from '@ngmodule/material-carousel';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    SneakersComponent,
    FooterComponent,
    ClothingComponent,
    UsedComponent,
    LoginComponent,
    RegisterComponent,
    AreaClienteComponent,
    CarrinhoComponent,
    MetodosPagamentoComponent,
    PedidoDetalhadoComponent,
    ProdutoDetalheComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFontAwesomeModule,
    HttpClientModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatCarouselModule,
    FormsModule,
    MatInputModule,
    ReactiveFormsModule,
    MatIconModule,
    MaterialModule,
    HttpClientModule,
  
    // NgxMaskModule.forRoot(),
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
