import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadComponent } from './upload.component';
import { ProgressComponent } from './progress/progress.component';
import {TranslateModule} from '@ngx-translate/core';
import { DndDirective } from './dnd.directive';



@NgModule({
  declarations: [UploadComponent, ProgressComponent, DndDirective],
  imports: [
    CommonModule,
    TranslateModule.forRoot()
  ],
  exports:[
    ProgressComponent,
    UploadComponent
  ]
})
export class UploadModule { }
