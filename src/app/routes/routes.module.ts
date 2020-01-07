import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

export const routes: Routes = [
  { path: '', loadChildren: () => import('../components/pokemon/pokemon.module').then(m => m.PokemonModule) },
  { path: 'about', loadChildren: () => import('../components/about/about.module').then(m => m.AboutModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
