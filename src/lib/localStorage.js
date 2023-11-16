import AsyncStorage from '@react-native-community/async-storage';

let storageKeys = {
  LOGIN_INFO: '@inventoryqrlabel:LOGIN_INFO',
  TOKEN_ID: '@inventoryqrlabel:TOKEN_ID',
  LANGUAGE_APP: '&inventoryqrlabel:LANGUAGE_APP',
  QUY_TRINH_ID: '&inventoryqrlabel:SELECTED_QUY_TRINH_ID',
  INITIAL_LAUNCH: '&inventoryqrlabel:INITIAL_LAUNCH',
};

class LocalStorage {
  setQuyTrinhID(quyTrinhID) {
    return AsyncStorage.setItem(
      storageKeys.QUY_TRINH_ID,
      JSON.stringify(quyTrinhID),
    );
  }

  getQuyTrinhID() {
    return AsyncStorage.getItem(storageKeys.QUY_TRINH_ID).then((ret) => {
      return JSON.parse(ret);
    });
  }
  setTokenID(tokenID) {
    return AsyncStorage.setItem(storageKeys.TOKEN_ID, JSON.stringify(tokenID));
  }

  getTokenID() {
    return AsyncStorage.getItem(storageKeys.TOKEN_ID).then((ret) => {
      return JSON.parse(ret);
    });
  }
  //{username, phone, password, sessionCookie}
  setLoginInfo(loginObj) {
    return AsyncStorage.setItem(
      storageKeys.LOGIN_INFO,
      JSON.stringify(loginObj),
    );
  }
  getLoginInfo() {
    return AsyncStorage.getItem(storageKeys.LOGIN_INFO).then((ret) => {
      return JSON.parse(ret);
    });
  }
  removeLogin() {
    AsyncStorage.removeItem(storageKeys.LOGIN_INFO);
  }

  setLanguage(languageObj) {
    return AsyncStorage.setItem(
      storageKeys.LANGUAGE_APP,
      JSON.stringify(languageObj),
    );
  }

  getLanguage() {
    return AsyncStorage.getItem(storageKeys.LANGUAGE_APP).then((res) => {
      return JSON.parse(res);
    });
  }

  removeLanguage() {
    AsyncStorage.removeItem(storageKeys.LANGUAGE_APP);
  }

  setInitLaunch(initLaunch) {
    return AsyncStorage.setItem(
      storageKeys.INITIAL_LAUNCH,
      JSON.stringify(initLaunch),
    );
  }

  getInitLaunch() {
    return AsyncStorage.getItem(storageKeys.INITIAL_LAUNCH).then((res) => {
      return JSON.parse(res);
    });
  }
}

let localStorage = new LocalStorage();

export default localStorage;
