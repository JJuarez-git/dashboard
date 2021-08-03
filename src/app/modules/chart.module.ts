import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartsModule } from 'ng2-charts';
import { LineChartComponent } from '../charts/line-chart/line-chart.component';
import { BarChartComponent } from '../charts/bar-chart/bar-chart.component';

const chartDeclarations = [
  LineChartComponent,
  BarChartComponent
];

@NgModule({
  declarations: [
    chartDeclarations
  ],
  imports: [
    CommonModule,
    ChartsModule
  ],
  exports: [
    ChartsModule,
    chartDeclarations
  ]
})
export class ChartModule { }
