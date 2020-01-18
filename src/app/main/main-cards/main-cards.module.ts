import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PewdieChannelComponent } from './pewdie-channel/pewdie-channel.component';
import { KubaChannelComponent } from './kuba-channel/kuba-channel.component';
import { TvnChannelComponent } from './tvn-channel/tvn-channel.component';
import { MainCardsComponent } from './main-cards.component';



@NgModule({
  declarations: [PewdieChannelComponent, KubaChannelComponent, TvnChannelComponent, MainCardsComponent],
  imports: [
    CommonModule,
  ],
  exports: [
    PewdieChannelComponent,
    KubaChannelComponent,
    TvnChannelComponent,
    MainCardsComponent
  ]
})
export class MainCardsModule { }
