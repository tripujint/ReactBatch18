import { combineReducers } from "redux";
import CountryReducer from "./CountryReducer";
import RegionReduce from "./RegionReducer";

const rootReducer = combineReducers({
    regionStated: RegionReduce,
    countryStated: CountryReducer
})

export default rootReducer