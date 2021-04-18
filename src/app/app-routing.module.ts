import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClothingComponent } from './pages/clothing/clothing.component';
import { HomeComponent } from './pages/home/home.component';
import { SneakersComponent } from './pages/sneakers/sneakers.component';
import { UsedComponent } from './pages/used/used.component';


const routes: Routes = [

   { path: '', component: HomeComponent,pathMatch: 'full'  },
   { path: 'tenis', component: SneakersComponent},
   { path: 'vestuario', component: ClothingComponent},
   { path: 'usados', component: UsedComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
