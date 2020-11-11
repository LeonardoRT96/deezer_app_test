import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlaylistPageRoutingModule } from './playlist-routing.module';

import { PlaylistPage } from './playlist.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlaylistPageRoutingModule,
    ComponentsModule
  ],
  declarations: [PlaylistPage]
})
export class PlaylistPageModule {}
