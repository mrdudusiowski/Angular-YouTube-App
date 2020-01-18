import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactFormComponent } from './contact-form.component';
import { MapComponent } from './map/map.component';



@NgModule({
  declarations: [ContactFormComponent, MapComponent],
  imports: [
    CommonModule,
  ],
  exports: [
    ContactFormComponent,
    MapComponent
  ]
})

export class ContactFormModule { }
