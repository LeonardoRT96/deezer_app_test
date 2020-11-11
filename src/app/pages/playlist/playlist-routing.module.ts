import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlaylistPage } from './playlist.page';

const routes: Routes = [
  {
    path: '',
    component: PlaylistPage,
    children: [
      {
        path: 'Buscar',
        loadChildren: () => import('./buscar/buscar.module').then( m => m.BuscarPageModule)
      },
      {
        path: 'Favoritos',
        loadChildren: () => import('./favoritos/favoritos.module').then( m => m.FavoritosPageModule)
      },
      {
        path: '',
        redirectTo: 'Buscar',
        pathMatch: 'full',
      }
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlaylistPageRoutingModule {}
