import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsComponent } from './charts.component';
import { ChartComponent } from './chart/chart.component';
import { TableComponent, NgbdSortableHeader} from './table/table.component';


@NgModule({
  declarations: [ChartsComponent, ChartComponent, TableComponent, NgbdSortableHeader],
  imports: [
    CommonModule
  ],
  exports:[
    ChartsComponent,
    ChartComponent,
    TableComponent
  ]
})
export class ChartsModule { }
