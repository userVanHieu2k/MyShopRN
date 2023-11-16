/**
 * # globalActions.js
 *
 * Actions that are global in nature
 */
'use strict';

/**
 * ## Imports
 *
 * The actions supported
 */
const {
  LAUNCH_APP,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  ON_RECEIVE_ALERT,
  ON_GLOBAL_FIELD_CHANGE,
  ON_UPLOAD_IMAGE,
  UPLOAD_IMAGE_SUCCESS,
  UPLOAD_IMAGE_FAILURE,
  LOGOUT_USER,
  EDIT_USER,
} = require('../../lib/constants').default;
const _ = require('lodash');

import ls from '../../lib/localStorage';
import log from '../../lib/logUtil';
import userApi from '../../lib/userApi';
import gui from '../../lib/gui';
import uploadApi from '../../lib/UploadApi';

export function onGlobalFieldChange(field, value) {
  return {
    type: ON_GLOBAL_FIELD_CHANGE,
    payload: { field: field, value: value },
  };
}

export function lauchApp(data) {
  return {
    type: LAUNCH_APP,
    payload: data,
  };
}

/**
 * ## Login actions
 */

export function loginRequest() {
  return {
    type: LOGIN_REQUEST,
  };
}

export function loginSuccess(user) {
  return {
    type: LOGIN_SUCCESS,
    payload: user,
  };
}
export function loginFailure(error) {
  return {
    type: LOGIN_FAILURE,
    payload: error,
  };
}

export function login(userName, password, deviceID, deviceModel) {
  log.info('Login action call');

  return (dispatch) => {
    dispatch(loginRequest());
    return userApi
      .login(userName, password, deviceID, deviceModel)
      .then(function (json) {
        log.info('Login success data action', json);
        if (json && json.status === 200) {
          log.info('Login susdad data action', json);
          let token = json.token;
          ls.setLoginInfo({ userName, password, token });
          dispatch(loginSuccess(json));
        } else {
          dispatch(loginFailure(json.error));
        }

        return json;
      });
  };
}

export function onReceiveAlert(data) {
  log.info('AuthenAction onReceiveAlert ====== global action', data);
  return {
    type: ON_RECEIVE_ALERT,
    payload: data.data,
  };
}

export function onUploadImage(filename, filepath, uploadCallBack, type) {
  return (dispatch) => {
    dispatch(setUploadingImage());
    return uploadApi.onUpload(filename, filepath, (result, err) => {
      if (err) {
        dispatch(uploadImageFailure(JSON.stringify(err)));
      } else {
        dispatch(uploadImageSuccess());
      }
      uploadCallBack && uploadCallBack(result, err, type);
    });
  };
}

export function setUploadingImage() {
  return {
    type: ON_UPLOAD_IMAGE,
    payload: null,
  };
}

export function uploadImageSuccess(payload) {
  return {
    type: UPLOAD_IMAGE_SUCCESS,
    payload: payload,
  };
}

export function uploadImageFailure(error) {
  return {
    type: UPLOAD_IMAGE_FAILURE,
    payload: error,
  };
}

export function logout() {
  return {
    type: LOGOUT_USER,
  };
}

export function editUser(data) {
  return {
    type: EDIT_USER,
    payload: data,
  };
}
