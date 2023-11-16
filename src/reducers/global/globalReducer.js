'use strict';

const {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LAUNCH_APP,
  ROUTER_FOCUS,
  ON_RECEIVE_ALERT,
  ON_GLOBAL_FIELD_CHANGE,
  ON_UPLOAD_IMAGE,
  UPLOAD_IMAGE_SUCCESS,
  UPLOAD_IMAGE_FAILURE,
  LOGOUT_USER,
  EDIT_USER,
} = require('../../lib/constants').default;

import InitialState from './globalInitialState';
import log from '../../lib/logUtil';

const initialState = new InitialState();

export default function globalReducer(state = initialState, action) {
  if (!(state instanceof InitialState)) {
    return initialState.merge(state);
  }

  if (action.type === 'focus') {
    action.type = ROUTER_FOCUS;
  }

  switch (action.type) {
    case ON_GLOBAL_FIELD_CHANGE: {
      const { field, value } = action.payload;
      let nextState = state.set(field, value);
      return nextState;
    }

    case LOGIN_REQUEST: {
      let newState = state.set('isLoggin', true);
      return newState;
    }
    case LOGIN_FAILURE: {
      let newState = state.set('isLoggin', false);
      return newState;
    }
    case LOGIN_SUCCESS: {
      log.info('=====> action.payload', action.payload);
      let data = action.payload.data;
      // log.info('=====> action.payload avatar', data?.infoUser?.avatar);
      let newState = state
        .setIn(['currentUser', 'userID'], data.userID)
        .setIn(['currentUser', 'id'], data.id)
        .setIn(['currentUser', 'token'], action.payload.token)
        .setIn(['currentUser', 'username'], data.username)
        // .setIn(['currentUser', 'phone'], data.phone)
        .setIn(['currentUser', 'email'], data.email)
        .setIn(['currentUser', 'fullName'], data.fullName)
        .setIn(['currentUser', 'avatar'], data.avatar)
        // .setIn(['currentUser', 'roles'], data.roles)
        // .setIn(['currentUser', 'glnCode'], data.glnCode)
        // .setIn(['currentUser', 'supplierID'], data.supplierID)
        // .setIn(['currentUser', 'transporterID'], data.transporterID)
        // .setIn(['currentUser', 'producerID'], data.producerID)
        .setIn(['currentUser', 'customerID'], data.customerID)
        // .setIn(['currentUser', 'customerCode'], data.customerCode)
        // .setIn(['currentUser', 'customerName'], data.customerName)
        // .setIn(
        //   ['currentUser', 'fullNameNguoiDaiDien'],
        //   data.fullNameNguoiDaiDien,
        // )
        // .setIn(['currentUser', 'phoneNguoiDaiDien'], data.phoneNguoiDaiDien)
        .setIn(['currentUser', 'businessRoles'], data.businessRoles || [])
        // .setIn(['currentUser', 'systemRoles'], data.systemRole || [])
        .setIn(['currentUser', 'systemRoles'], data.businessRoles || [])
        // .setIn(['currentUser','roleList'], data.roleList)
        // .setIn(['currentUser','isExport'], data.isExport)
        .set('loggedIn', true)
        .set('isLoggin', false);
      // log.info('=====> newState', newState);
      return newState;
    }
    case LOGOUT_USER: {
      let newState = state
        .setIn(['currentUser', 'userID'], null)
        .setIn(['currentUser', 'id'], null)
        .setIn(['currentUser', 'token'], '')
        .setIn(['currentUser', 'username'], '')
        // .setIn(['currentUser', 'phone'], '')
        // .setIn(['currentUser', 'email'], '')
        // .setIn(['currentUser', 'fullName'], '')
        // .setIn(['currentUser', 'avatar'], '')
        // .setIn(['currentUser', 'glnCode'], '')
        // .setIn(['currentUser', 'supplierID'], '')
        // .setIn(['currentUser', 'transporterID'], '')
        // .setIn(['currentUser', 'producerID'], '')
        // .setIn(['currentUser', 'customerID'], '')
        // .setIn(['currentUser', 'customerCode'], '')
        // .setIn(['currentUser', 'customerName'], '')
        // .setIn(['currentUser', 'fullNameNguoiDaiDien'], '')
        // .setIn(['currentUser', 'phoneNguoiDaiDien'], '')
        // .setIn(['currentUser', 'businessRoles'], [])
        // .setIn(['currentUser', 'systemRoles'], [])
        // .setIn(['currentUser','roleList'], data.roleList)
        // .setIn(['currentUser','isExport'], data.isExport)
        .set('loggedIn', false);
      return newState;
    }
    case EDIT_USER: {
      let data = action.payload;
      // log.info('=====> data', data);
      let newState = state
        .setIn(['currentUser', 'fullName'], data.fullName)
        .setIn(['currentUser', 'email'], data.email)
        .setIn(['currentUser', 'avatar'], data.avatar);
      return newState;
    }
    case LAUNCH_APP: {
      var data = action.payload;
      // console.log('data launch', data);
      var next = state
        .set('deviceInfo', data.deviceInfo)
        .set('appInfo', data.appInfo)
        .set('systemRoles', data.systemRole);

      return next;
    }

    case ROUTER_FOCUS: {
      //RNRF action
      log.info('Call globalReducer.route ');
      let prevScene = state.scene;

      var next = state.set('scene', action.scene).set('prevScene', prevScene);

      return next;
    }

    case ON_RECEIVE_ALERT: {
      let data = action.payload;
      log.info('-()---> Nhận được một socket mới data', data);
      // let newAlert = data;
      // newAlert.createdBy = data.fromPK;
      // newAlert.timeCreated = data.timeModified;
      // newAlert.unread = 0;
      // let listOfAlertsOriginal = state.listOfAlerts;
      // let nextState = state.set('listOfAlerts', [newAlert, ...listOfAlertsOriginal]);

      // let newAlert = data;
      let nextState = state.set('dataNoti', data);
      return nextState;
    }

    case ON_UPLOAD_IMAGE: {
      return state.set('imageUploading', true);
    }
    case UPLOAD_IMAGE_SUCCESS: {
      let nextState = state.set('error', null).set('imageUploading', false);
      return nextState;
    }
    case UPLOAD_IMAGE_FAILURE:
      return state.set('error', action.payload).set('imageUploading', false);
  }

  return state;
}
