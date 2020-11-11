import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuscarPage } from './buscar.page';

const routes: Routes = [
  {
    path: '',
    component: BuscarPage,
    children: [
      {
        path: 'Cancion',
        loadChildren: () => import('./cancion/cancion.module').then( m => m.CancionPageModule)
      },
      {
        path: 'Artista',
        loadChildren: () => import('./artista/artista.module').then( m => m.ArtistaPageModule)
      },
      {
        path: 'Album',
        loadChildren: () => import('./album/album.module').then( m => m.AlbumPageModule)
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
export class BuscarPageRoutingModule {}
