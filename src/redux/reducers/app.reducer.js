import actionTypes from '../actionTypes/app.actionTypes';
import persistWrapper from './persistWrapper';

const initialState = {
  securityCode: '',
  companyName: '',
  biometricsEnabled: false,
};

const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_SECURITY_CODE:
      return {...state, securityCode: action.payload};
    case actionTypes.SET_COMPANY_NAME:
      return {...state, companyName: action.payload};
    case actionTypes.SET_BIOMETRICS_ENABLED:
      return {...state, biometricsEnabled: action.payload};
    default:
      return state;
  }
};

export default persistWrapper(AppReducer, [], 'App');
