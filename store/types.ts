import { Chart } from "../lib/types/chart.type";

export type StoreCharts = {
    chart: Chart[];
    chartMax: number;
};

export type Store = {
    charts?: StoreCharts;
};
