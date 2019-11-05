import { combineReducers } from 'redux';
import fuelSavings from './fuelSavingsReducer';
import CssModuleTestReducer from '../components/CssModuleTest/CssModuleTest.reducer';
import { connectRouter } from 'connected-react-router'

const rootReducer = history => combineReducers({
    router: connectRouter(history),
    CssModuleTestReducer,
    fuelSavings,
});

export default rootReducer;
