import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { AboutComponent } from '../components/about/about.component';
import { PokemonListComponent } from '../components/pokemon/pokemon-list/pokemon-list.component';
import { HomeComponent } from '../components/home/home.component';

export const routes: Routes = [
  { path: '', loadChildren: () => import('../components/pokemon/pokemon.module').then(m => m.PokemonModule) },
  { path: 'about', component: AboutComponent },
  { path: 'home', component: HomeComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

