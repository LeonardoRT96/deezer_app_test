import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FavoritosPage } from './favoritos.page';

const routes: Routes = [
  {
    path: '',
    component: FavoritosPage,
    children: [
      {
        path: 'Album',
        loadChildren: () => import('./album/album.module').then( m => m.AlbumPageModule)
      },
      {
        path: 'Artista',
        loadChildren: () => import('./artista/artista.module').then( m => m.ArtistaPageModule)
      },
      {
        path: 'Cancion',
        loadChildren: () => import('./cancion/cancion.module').then( m => m.CancionPageModule)
      },
      {
        path: '',
        redirectTo: 'Cancion',
        pathMatch: 'full'
      }
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FavoritosPageRoutingModule {}
