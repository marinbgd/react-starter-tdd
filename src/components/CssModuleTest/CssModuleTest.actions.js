import axios from 'axios';

import {
    FETCHING_CSS_MODULE_TEST_SUCCESS,
    FETCHING_CSS_MODULE_TEST_ERRORED,
    FETCHING_CSS_MODULE_TEST_IN_PROGRESS,
} from './CssModuleTest.actionTypes'

export const fetchCssModuleData = () => dispatch => {
    console.log(222)
    dispatch({ type: FETCHING_CSS_MODULE_TEST_IN_PROGRESS });
};

/*export function fetchCssModuleData () {
    return dispatch => {
        console.log(222)
        dispatch({ type: FETCHING_CSS_MODULE_TEST_IN_PROGRESS });
    }
}*/
