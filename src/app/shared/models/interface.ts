import { ApexAxisChartSeries, ApexChart } from "ng-apexcharts";

export interface Product {
  id: number;
  imgSrc: string;
  price: number;
  time: string;
}
export interface ElementProd {
  name: string;
  className: string;
  amount: number;
}
export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
};