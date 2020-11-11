import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'pages/Inicio',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'pages/Inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'pages/Cuenta',
    loadChildren: () => import('./pages/cuenta/cuenta.module').then( m => m.CuentaPageModule)
  },
  {
    path: 'pages/Playlist',
    loadChildren: () => import('./pages/playlist/playlist.module').then( m => m.PlaylistPageModule)
  },
  {
    path: 'pages/Buscar',
    loadChildren: () => import('./pages/buscar/buscar.module').then( m => m.BuscarPageModule)
  },
  {
    path: 'pages/Favoritos',
    loadChildren: () => import('./pages/favoritos/favoritos.module').then( m => m.FavoritosPageModule)
  },
  {
    path: 'buscar',
    loadChildren: () => import('./pages1/buscar/buscar.module').then( m => m.BuscarPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
