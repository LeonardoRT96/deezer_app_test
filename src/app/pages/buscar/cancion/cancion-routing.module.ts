import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CancionPage } from './cancion.page';

const routes: Routes = [
  {
    path: '',
    component: CancionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CancionPageRoutingModule {}
