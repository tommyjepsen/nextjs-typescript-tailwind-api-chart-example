import { Dispatch } from "redux";
import fetcher, { URL, URL_CHART } from "../../lib/fetcher";
import { ActionTypes } from "../actiontypes";

export const API = {
    //Get Charts
    getCharts(dispatch: Dispatch) {
        fetcher(URL + URL_CHART)
            .then((data) => {
                dispatch({
                    type: ActionTypes.TYPE_CHARTS_ADD,
                    payload: data || [],
                });
            })
            .catch((error) => {
                console.log("error", error);
            });
    },
};
