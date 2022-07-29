import {
    applyMiddleware,
    combineReducers,
    createStore,
    Store,
} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { State } from ".";
import { weatherForecastReducer } from "../reducers/weatherForecast";

export default () => {
    const reducer = combineReducers({
        weatherForecast: weatherForecastReducer,
    });

    const store: Store<State | undefined> = createStore(
        reducer,
        composeWithDevTools(applyMiddleware(thunk)),
    );

    return store;
};
