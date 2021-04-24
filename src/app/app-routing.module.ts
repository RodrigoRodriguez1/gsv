import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClothingComponent } from './pages/clothing/clothing.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { SneakersComponent } from './pages/sneakers/sneakers.component';
import { UsedComponent } from './pages/used/used.component';


const routes: Routes = [

   { path: '', component: HomeComponent,pathMatch: 'full'  },
   { path: 'tenis', component: SneakersComponent},
   { path: 'vestuario', component: ClothingComponent},
   { path: 'usados', component: UsedComponent},
   { path: 'login', component: LoginComponent},
   { path: 'register', component: RegisterComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
