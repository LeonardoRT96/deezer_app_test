import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArtistaPageRoutingModule } from './artista-routing.module';

import { ArtistaPage } from './artista.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArtistaPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ArtistaPage]
})
export class ArtistaPageModule {}
