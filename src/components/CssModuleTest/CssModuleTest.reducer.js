import {
    FETCHING_CSS_MODULE_TEST_IN_PROGRESS,
    FETCHING_CSS_MODULE_TEST_ERRORED,
    FETCHING_CSS_MODULE_TEST_SUCCESS,
} from './CssModuleTest.actionTypes.js';

const INITIAL_STATE = {
    isLoading: false,
    isError: false,
    data: 'initial data inside CssModuleTest.reducer',
};

export default function CssModuleTestReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
    case FETCHING_CSS_MODULE_TEST_IN_PROGRESS:
        return {
            ...state,
            isLoading: true,
        };
    case FETCHING_CSS_MODULE_TEST_ERRORED:
        return {
            ...state,
            isLoading: false,
            isError: true,
        };
    case FETCHING_CSS_MODULE_TEST_SUCCESS:
        return {
            data: action.payload,
            isLoading: false,
            isError: false,
        };
    default:
        return state;
    }
}
