import { Chart } from "../../lib/types/chart.type";
import { ActionTypes } from "../actiontypes";
import { StoreCharts } from "../types";

const initialState: StoreCharts = {
    chart: [] as Chart[],
    chartMax: 0,
};

type Action = {
    type: string;
    payload: Chart[] | number;
};

function chartsReducer(state = initialState, action: Action) {
    switch (action.type) {
        case ActionTypes.TYPE_CHARTS_ADD: {
            //Find maxHeight
            let maxHeight = 0;
            for (const chartItem of action.payload as Chart[]) {
                if (chartItem.count > maxHeight) {
                    maxHeight = chartItem.count;
                }
            }

            return { ...state, chart: action.payload, chartMax: maxHeight };
        }
        default: {
            return state;
        }
    }
}
export default chartsReducer;
