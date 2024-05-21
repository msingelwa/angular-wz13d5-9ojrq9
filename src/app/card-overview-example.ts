import { Component, ViewChild } from '@angular/core';
import { ChartComponent } from 'ng-apexcharts';

import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart,
  ApexLegend,
} from 'ng-apexcharts';
/**
 * @title Basic cards
 */

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: ApexDataLabels
  legend: ApexLegend;
};
@Component({
  selector: 'card-overview-example',
  templateUrl: 'card-overview-example.html',
})
export class CardOverviewExample {
  @ViewChild('chart') chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
    this.chartOptions = {
      series: [44, 55, 13, 43, 22],
      chart: {
        width: 380,
        type: 'pie',
      },
      labels: {
        // labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
        formatter: function(value: any){
          return value.toFixed();
        }
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              show: false, // not able to hide chart legends
            },
          },
        },
      ],
    };
  }
}

/**  Copyright 2020 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
