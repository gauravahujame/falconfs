import appActionTypes from '../actionTypes/app.actionTypes';

export const setSecurityCode = payload => ({
  type: appActionTypes.SET_SECURITY_CODE,
  payload,
});

export const setCompanyName = payload => ({
  type: appActionTypes.SET_COMPANY_NAME,
  payload,
});

export const setBiometricsEnabled = payload => ({
  type: appActionTypes.SET_BIOMETRICS_ENABLED,
  payload,
});
