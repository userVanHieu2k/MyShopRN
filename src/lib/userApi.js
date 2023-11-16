import ApiUtils from './ApiUtils';
import cfg from '../cfg';
import cfg2 from '../cfg2';
import log from './logUtil';
import gui from './gui';

//cheTN
// var loginUrl = cfg.rootUrl + '/TableUser/login';
var loginUrl = cfg.rootUrl + '/user/login';

// Category
var getListCategory = cfg.rootUrl + '/category/getListCategory';

// Article
var getArticleByAliasCategory =
  cfg.rootUrl + '/article/getArticleByAliasCategory2';
var getAllArticle = cfg.rootUrl + '/article/search';
var getAllCustomer = cfg.rootUrl + '/customer/getListCustomer';
var getArticleByCategoryID =
  cfg.rootUrl + '/categoryRelation/getNewsRelationByCategoryID';

//Product
var getProducteRate = cfg.rootUrl + '/product/getProducteRate';
var getProductComment = cfg.rootUrl + '/product/getProductComment';
var getProductCertification = cfg.rootUrl + '/certification/search';
var getDetailProductWCL = cfg.rootUrl + '/getDetailProductWCL';
var getListMostView = cfg.rootUrl + '/product/getListMostView';

// Feedback
// var getListFeedback = cfg.rootUrl + '/feedback/search';
var getListFeedback = cfg.rootUrl + '/article/search';
var createFeedback = cfg.rootUrl + '/feedback/create';
var updateFeedback = cfg.rootUrl + '/feedback/update';
var deleteFeedback = cfg.rootUrl + '/feedback/delete';

//Document
var searchParent = cfg.rootUrl + '/directory/searchparent';
var searchParentChild = cfg.rootUrl + '/document/search';
var searchParentChildName = cfg.rootUrl + '/document/search2';
var searchFile = cfg.rootUrl + '/document/searchFile';
var countFile = cfg.rootUrl + '/document/countFile';
var getTopDownload = cfg.rootUrl + '/document/getTopDownload';
//Scan
var scanForTrace = cfg.rootUrl + '/scan/scanForTrace';
var getSearialByUri = cfg.rootUrl + '/qrcode/getSearialByUri';
var getSearialBySerial = cfg.rootUrl + '/qrcode/getSearialBySerial';

// END CHE
//doanhnghiep

var createInfomation = cfg.rootUrl + '/customer/create';

//user
var resendVerifyUrl = cfg.rootUrl + '/user/resendVerifyCodeRegister';
var sendVerifyCodeResetPasswordUrl =
  cfg.rootUrl + '/user/sendVerifyCodeResetPassword';
var registerUrl = cfg.rootUrl + '/user/register';
var changePasswordUrl = cfg.rootUrl + '/user/changePassword';
var resetPasswordUrl = cfg.rootUrl + '/user/resetPassword';
var updateProfileUrl = cfg.rootUrl + '/user/updateProfile';
var getUserById = cfg.rootUrl + '/user/getUserById';
var updateByID = cfg.rootUrl + '/user/updateByID';
var getListUser = cfg.rootUrl + '/user/getListUser';
var deleteUserByPassword = cfg.rootUrl + '/user/deleteUserByPassword';
var isVerifyCodeUrl = cfg.rootUrl + '/user/verifyCodeRegister';
var resetPasswordByEmail = cfg.rootUrl + '/user/resetPasswordByEmail';
var updateProfileUserWeb = cfg.rootUrl + '/user/updateProfileUserWeb';

//planting
var dataPlanting = cfg.rootUrl + '/event/getEventDetail';
var deletePlanting = cfg.rootUrl + '/event/deleteTaskEvent';

//event
var createTaskEventUrl = cfg.rootUrl + '/event/createTaskEvent';
var updateTaskEventUrl = cfg.rootUrl + '/event/updateTaskEvent';
var deleteTaskEventUrl = cfg.rootUrl + '/event/deleteTaskEvent';
var getTaskEventUrl = cfg.rootUrl + '/event/getTaskEvent';
var getDanhMucRiengUrl = cfg.rootUrl + '/danhMuc/getDanhMucRieng';
var getDanhMucUrl = cfg.rootUrl + '/danhMuc/getDanhMucByCategory';
var getQuyTrinhDetailUrl = cfg.rootUrl + '/quyTrinh/getQuyTrinhDetail';
var getQuyTrinhByCustomerIDUrl = cfg.rootUrl + '/quytrinh/getAllQuyTrinh';
var getMetaDataTaskUrl = cfg.rootUrl + '/danhMuc/getMetaDataTask';
var getMetaDataComponentUrl = cfg.rootUrl + '/danhMuc/getMetaDataComponent';
var getEventHistoryUrl = cfg.rootUrl + '/event/getEventHistory';
var getEventDetailUrl = cfg.rootUrl + '/event/getEventDetail';
var getEventForReferenceUrl = cfg.rootUrl + '/event/getEventForReference';
var uploadFilesNoS3Url = cfg.rootUrl + '/uploadImagesNoS3';

let userApi = {
  login(userName, password, deviceID, deviceModel) {
    var params = {
      userName,
      password,
      // deviceID: deviceID,
      // deviceModel: deviceModel,
      // 'deviceInfo': deviceInfo
    };
    // Alert.alert('fetch =======  loginUrl', `${loginUrl} ${params}`);
    log.info('=================== loginUrl', loginUrl, params);

    return fetch(`${loginUrl}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params),
    })
      .then(ApiUtils.checkStatus)
      .then(response => {
        return response.json();
      })
      .catch(e => {
        log.info('Error in login', e);
        return {
          status: 101,
          msg: gui.ERR_LoiKetNoiMayChu,
        };
      });
  },
  getListCategory(dto) {
    log.info('fetch =======  getListCategory', getListCategory, dto);

    return fetch(`${getListCategory}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dto),
    })
      .then(ApiUtils.checkStatus)
      .then(response => {
        return response.json();
      })
      .catch(e => {
        log.info('Error in getListCategory', e);
        return {
          status: 101,
          msg: gui.ERR_LoiKetNoiMayChu,
        };
      });
  },

  getArticleByAliasCategory(dto) {
    log.info(
      'fetch =======  getArticleByAliasCategory',
      getArticleByAliasCategory,
      dto,
    );

    return fetch(`${getArticleByAliasCategory}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dto),
    })
      .then(ApiUtils.checkStatus)
      .then(response => {
        return response.json();
      })
      .catch(e => {
        log.info('Error in getArticleByAliasCategory', e);
        return {
          status: 101,
          msg: gui.ERR_LoiKetNoiMayChu,
        };
      });
  },
  getAlllArticle(dto) {
    log.info('fetch =======  getAllArticle', getAllArticle, dto);

    return fetch(`${getAllArticle}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dto),
    })
      .then(ApiUtils.checkStatus)
      .then(response => {
        return response.json();
      })
      .catch(e => {
        log.info('Error in getAllArticle', e);
        return {
          status: 101,
          msg: gui.ERR_LoiKetNoiMayChu,
        };
      });
  },
  getAllCustomer(dto) {
    log.info('fetch =======  getAllArticle', getAllCustomer, dto);

    return fetch(`${getAllCustomer}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dto),
    })
      .then(ApiUtils.checkStatus)
      .then(response => {
        return response.json();
      })
      .catch(e => {
        log.info('Error in getAllArticle', e);
        return {
          status: 101,
          msg: gui.ERR_LoiKetNoiMayChu,
        };
      });
  },
  getProducteRate(dto) {
    log.info('fetch =======  getProducteRate', getProducteRate, dto);

    return fetch(`${getProducteRate}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dto),
    })
      .then(ApiUtils.checkStatus)
      .then(response => {
        return response.json();
      })
      .catch(e => {
        log.info('Error in getProducteRate', e);
        return {
          status: 101,
          msg: gui.ERR_LoiKetNoiMayChu,
        };
      });
  },
  getProductComment(dto) {
    log.info('fetch =======  getProductComment', getProductComment, dto);

    return fetch(`${getProductComment}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dto),
    })
      .then(ApiUtils.checkStatus)
      .then(response => {
        return response.json();
      })
      .catch(e => {
        log.info('Error in getProductComment', e);
        return {
          status: 101,
          msg: gui.ERR_LoiKetNoiMayChu,
        };
      });
  },
  getProductCertification(dto) {
    log.info(
      'fetch =======  getProductCertification',
      getProductCertification,
      dto,
    );

    return fetch(`${getProductCertification}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dto),
    })
      .then(ApiUtils.checkStatus)
      .then(response => {
        return response.json();
      })
      .catch(e => {
        log.info('Error in getProductCertification', e);
        return {
          status: 101,
          msg: gui.ERR_LoiKetNoiMayChu,
        };
      });
  },
  getDetailProductWCL(dto) {
    log.info('fetch =======  getDetailProductWCL', getDetailProductWCL, dto);

    return fetch(`${getDetailProductWCL}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dto),
    })
      .then(ApiUtils.checkStatus)
      .then(response => {
        return response.json();
      })
      .catch(e => {
        log.info('Error in getDetailProductWCL', e);
        return {
          status: 101,
          msg: gui.ERR_LoiKetNoiMayChu,
        };
      });
  },
  getListMostView(dto) {
    log.info('fetch =======  getListMostView', getListMostView, dto);

    return fetch(`${getListMostView}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dto),
    })
      .then(ApiUtils.checkStatus)
      .then(response => {
        return response.json();
      })
      .catch(e => {
        log.info('Error in getListMostView', e);
        return {
          status: 101,
          msg: gui.ERR_LoiKetNoiMayChu,
        };
      });
  },
  getArticleByCategoryID(dto) {
    log.info(
      'fetch =======  getArticleByCategoryID',
      getArticleByCategoryID,
      dto,
    );

    return fetch(`${getArticleByCategoryID}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dto),
    })
      .then(ApiUtils.checkStatus)
      .then(response => {
        return response.json();
      })
      .catch(e => {
        log.info('Error in getArticleByCategoryID', e);
        return {
          status: 101,
          msg: gui.ERR_LoiKetNoiMayChu,
        };
      });
  },
  getListFeedback(dto) {
    log.info('fetch =======  getListFeedback', getListFeedback, dto);

    return fetch(`${getListFeedback}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dto),
    })
      .then(ApiUtils.checkStatus)
      .then(response => {
        return response.json();
      })
      .catch(e => {
        log.info('Error in getListFeedback', e);
        return {
          status: 101,
          msg: gui.ERR_LoiKetNoiMayChu,
        };
      });
  },
  searchParent(dto) {
    log.info('fetch =======  searchParent', searchParent, dto);

    return fetch(`${searchParent}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dto),
    })
      .then(ApiUtils.checkStatus)
      .then(response => {
        return response.json();
      })
      .catch(e => {
        log.info('Error in searchParent', e);
        return {
          status: 101,
          msg: gui.ERR_LoiKetNoiMayChu,
        };
      });
  },
  searchParentChild(dto) {
    log.info('fetch =======  searchParent', searchParentChild, dto);

    return fetch(`${searchParentChild}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dto),
    })
      .then(ApiUtils.checkStatus)
      .then(response => {
        return response.json();
      })
      .catch(e => {
        log.info('Error in searchParentChild', e);
        return {
          status: 101,
          msg: gui.ERR_LoiKetNoiMayChu,
        };
      });
  },
  searchParentChildName(dto) {
    log.info('fetch =======  searchParent', searchParentChildName, dto);

    return fetch(`${searchParentChildName}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dto),
    })
      .then(ApiUtils.checkStatus)
      .then(response => {
        return response.json();
      })
      .catch(e => {
        log.info('Error in searchParentChildName', e);
        return {
          status: 101,
          msg: gui.ERR_LoiKetNoiMayChu,
        };
      });
  },
  searchFile(dto) {
    log.info('fetch =======  searchParent', searchFile, dto);

    return fetch(`${searchFile}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dto),
    })
      .then(ApiUtils.checkStatus)
      .then(response => {
        return response.json();
      })
      .catch(e => {
        log.info('Error in searchFile', e);
        return {
          status: 101,
          msg: gui.ERR_LoiKetNoiMayChu,
        };
      });
  },
  countFile(dto) {
    log.info('fetch =======  countFile', countFile, dto);

    return fetch(`${countFile}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dto),
    })
      .then(ApiUtils.checkStatus)
      .then(response => {
        return response.json();
      })
      .catch(e => {
        log.info('Error in countFile', e);
        return {
          status: 101,
          msg: gui.ERR_LoiKetNoiMayChu,
        };
      });
  },
  getTopDownload(dto) {
    log.info('fetch =======  getTopDownload', getTopDownload, dto);

    return fetch(`${getTopDownload}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dto),
    })
      .then(ApiUtils.checkStatus)
      .then(response => {
        return response.json();
      })
      .catch(e => {
        log.info('Error in getTopDownload', e);
        return {
          status: 101,
          msg: gui.ERR_LoiKetNoiMayChu,
        };
      });
  },
  getEventForReference(dto, token) {
    log.info(
      'fetch =======  getEventForReference',
      getEventForReferenceUrl,
      dto,
      token,
    );

    return fetch(`${getEventForReferenceUrl}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      },
      body: JSON.stringify(dto),
    })
      .then(ApiUtils.checkStatus)
      .then(response => {
        return response.json();
      })
      .catch(e => {
        log.info('Error in getEventForReferenceUrl', e);
        return {
          status: 101,
          msg: gui.ERR_LoiKetNoiMayChu,
        };
      });
  },
  scanForTrace(dto) {
    log.info('fetch =======  scanForTrace', scanForTrace, dto);

    return fetch(`${scanForTrace}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dto),
    })
      .then(ApiUtils.checkStatus)
      .then(response => {
        return response.json();
      })
      .catch(e => {
        log.info('Error in scanForTrace', e);
        return {
          status: 101,
          msg: gui.ERR_LoiKetNoiMayChu,
        };
      });
  },

  getSearialByUri(dto) {
    log.info('fetch =======  getSearialByUri', getSearialByUri, dto);

    return fetch(`${getSearialByUri}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dto),
    })
      .then(ApiUtils.checkStatus)
      .then(response => {
        return response.json();
      })
      .catch(e => {
        log.info('Error in getSearialByUri', e);
        return {
          status: 101,
          msg: gui.ERR_LoiKetNoiMayChu,
        };
      });
  },
  getSearialBySerial(dto) {
    log.info('fetch =======  getSearialBySerial', getSearialBySerial, dto);

    return fetch(`${getSearialBySerial}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dto),
    })
      .then(ApiUtils.checkStatus)
      .then(response => {
        return response.json();
      })
      .catch(e => {
        log.info('Error in getSearialBySerial', e);
        return {
          status: 101,
          msg: gui.ERR_LoiKetNoiMayChu,
        };
      });
  },
  createFeedback(dto) {
    log.info('fetch =======  createFeedback', createFeedback, dto);

    return fetch(`${createFeedback}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dto),
    })
      .then(ApiUtils.checkStatus)
      .then(response => {
        return response.json();
      })
      .catch(e => {
        log.info('Error in createFeedback', e);
        return {
          status: 101,
          msg: gui.ERR_LoiKetNoiMayChu,
        };
      });
  },

  ///////
  createInfomation(dto) {
    log.info('fetch =======  createInfomation', createInfomation, dto);

    return fetch(`${createInfomation}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dto),
    })
      .then(ApiUtils.checkStatus)
      .then(response => {
        return response.json();
      })
      .catch(e => {
        log.info('Error in createInfomation', e);
        return {
          status: 101,
          msg: gui.ERR_LoiKetNoiMayChu,
        };
      });
  },

  updateByID(dto) {
    log.info('fetch =======  updateByID', updateByID, dto);

    return fetch(`${updateByID}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dto),
    })
      .then(ApiUtils.checkStatus)
      .then(response => {
        return response.json();
      })
      .catch(e => {
        log.info('Error in updateByID', e);
        return {
          status: 101,
          msg: gui.ERR_LoiKetNoiMayChu,
        };
      });
  },
  getListUser(dto) {
    log.info('fetch =======  getListUser', getListUser, dto);

    return fetch(`${getListUser}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dto),
    })
      .then(ApiUtils.checkStatus)
      .then(response => {
        return response.json();
      })
      .catch(e => {
        log.info('Error in getListUser', e);
        return {
          status: 101,
          msg: gui.ERR_LoiKetNoiMayChu,
        };
      });
  },
  getUserById(dto) {
    log.info('fetch =======  getUserById', getUserById, dto);

    return fetch(`${getUserById}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dto),
    })
      .then(ApiUtils.checkStatus)
      .then(response => {
        return response.json();
      })
      .catch(e => {
        log.info('Error in getUserById', e);
        return {
          status: 101,
          msg: gui.ERR_LoiKetNoiMayChu,
        };
      });
  },

  async uploadFilesNoS3(formData) {
    log.info('fetch =======  uploadFilesNoS3Url', uploadFilesNoS3Url, formData);

    return fetch(`${uploadFilesNoS3Url}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: formData,
    })
      .then(ApiUtils.checkStatus)
      .then(response => {
        return response.json();
      })
      .catch(e => {
        log.info('Error in uploadFilesNoS3', e);
        return {
          status: 101,
          msg: gui.ERR_LoiKetNoiMayChu,
        };
      });
  },
  async uploadFilesNoS3Android(formData) {
    log.info('fetch =======  uploadFilesNoS3Url', uploadFilesNoS3Url, formData);

    return fetch(`${uploadFilesNoS3Url}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
      },
      body: formData,
    })
      .then(ApiUtils.checkStatus)
      .then(response => {
        return response.json();
      })
      .catch(e => {
        log.info('Error in uploadFilesNoS3', e);
        return {
          status: 101,
          msg: gui.ERR_LoiKetNoiMayChu,
        };
      });
  },

  register(dto) {
    log.info('fetch =======  register', registerUrl, dto);

    return fetch(`${registerUrl}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dto),
    })
      .then(ApiUtils.checkStatus)
      .then(response => {
        return response.json();
      })
      .catch(e => {
        log.info('Error in register', e);
        return {
          status: 101,
          msg: gui.ERR_LoiKetNoiMayChu,
        };
      });
  },
  isVerifyCode(dto) {
    log.info('fetch =======  isVerifyCode', isVerifyCodeUrl, dto);

    return fetch(`${isVerifyCodeUrl}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dto),
    })
      .then(ApiUtils.checkStatus)
      .then(response => {
        return response.json();
      })
      .catch(e => {
        log.info('Error in isVerifyCode', e);
        return {
          status: 101,
          msg: gui.ERR_LoiKetNoiMayChu,
        };
      });
  },
  resetPasswordByEmail(dto) {
    log.info('fetch =======  isVerifyCode', resetPasswordByEmail, dto);

    return fetch(`${resetPasswordByEmail}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dto),
    })
      .then(ApiUtils.checkStatus)
      .then(response => {
        return response.json();
      })
      .catch(e => {
        log.info('Error in resetPasswordByEmail', e);
        return {
          status: 101,
          msg: gui.ERR_LoiKetNoiMayChu,
        };
      });
  },
  updateProfileUserWeb(dto, token) {
    log.info('fetch =======  isVerifyCode', updateProfileUserWeb, dto, token);

    return fetch(`${updateProfileUserWeb}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      },
      body: JSON.stringify(dto),
    })
      .then(ApiUtils.checkStatus)
      .then(response => {
        return response.json();
      })
      .catch(e => {
        log.info('Error in updateProfileUserWeb', e);
        return {
          status: 101,
          msg: gui.ERR_LoiKetNoiMayChu,
        };
      });
  },
  sendVerifyCodeResetPassword(dto) {
    log.info(
      'fetch =======  sendVerifyCodeResetPasswordUrl',
      sendVerifyCodeResetPasswordUrl,
      dto,
    );

    return fetch(`${sendVerifyCodeResetPasswordUrl}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dto),
    })
      .then(ApiUtils.checkStatus)
      .then(response => {
        return response.json();
      })
      .catch(e => {
        log.info('Error in sendVerifyCodeResetPassword', e);
        return {
          status: 101,
          msg: gui.ERR_LoiKetNoiMayChu,
        };
      });
  },
  resendVerify(dto) {
    log.info('fetch =======  resendVerifyUrl', resendVerifyUrl, dto);

    return fetch(`${resendVerifyUrl}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dto),
    })
      .then(ApiUtils.checkStatus)
      .then(response => {
        return response.json();
      })
      .catch(e => {
        log.info('Error in resendVerifyUrl', e);
        return {
          status: 101,
          msg: gui.ERR_LoiKetNoiMayChu,
        };
      });
  },
  changePassword(dto, token) {
    log.info('fetch =======  changePasswordUrl', changePasswordUrl, dto, token);

    return fetch(`${changePasswordUrl}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      },
      body: JSON.stringify(dto),
    })
      .then(ApiUtils.checkStatus)
      .then(response => {
        return response.json();
      })
      .catch(e => {
        log.info('Error in changePasswordUrl', e);
        return {
          status: 101,
          msg: gui.ERR_LoiKetNoiMayChu,
        };
      });
  },
  resetPassword(dto) {
    log.info('fetch =======  resetPasswordUrl', resetPasswordUrl, dto);

    return fetch(`${resetPasswordUrl}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        // Authorization: 'Bearer ' + token,
      },
      body: JSON.stringify(dto),
    })
      .then(ApiUtils.checkStatus)
      .then(response => {
        return response.json();
      })
      .catch(e => {
        log.info('Error in resetPasswordUrl', e);
        return {
          status: 101,
          msg: gui.ERR_LoiKetNoiMayChu,
        };
      });
  },
  updateProfile(dto, token) {
    log.info('fetch =======  updateProfileUrl', updateProfileUrl, dto, token);

    return fetch(`${updateProfileUrl}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      },
      body: JSON.stringify(dto),
    })
      .then(ApiUtils.checkStatus)
      .then(response => {
        return response.json();
      })
      .catch(e => {
        log.info('Error in updateProfileUrl', e);
        return {
          status: 101,
          msg: gui.ERR_LoiKetNoiMayChu,
        };
      });
  },

  deleteUser(dto) {
    log.info('fetch =======  deleteUserByPassword', deleteUserByPassword, dto);

    return fetch(`${deleteUserByPassword}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        // Authorization: 'Bearer ' + token,
      },
      body: JSON.stringify(dto),
    })
      .then(ApiUtils.checkStatus)
      .then(response => {
        return response.json();
      })
      .catch(e => {
        log.info('Error in updateProfileUrl', e);
        return {
          status: 101,
          msg: gui.ERR_LoiKetNoiMayChu,
        };
      });
  },

  getDataPlanting(dto, token) {
    return fetch(`${dataPlanting}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      },
      body: JSON.stringify(dto),
    })
      .then(ApiUtils.checkStatus)
      .then(response => {
        return response.json();
      })
      .catch(e => {
        return {
          status: 101,
          msg: gui.ERR_LoiKetNoiMayChu,
        };
      });
  },

  deletePlanting(dto, token) {
    return fetch(`${deletePlanting}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      },
      body: JSON.stringify(dto),
    })
      .then(ApiUtils.checkStatus)
      .then(response => {
        return response.json();
      })
      .catch(e => {
        return {
          status: 101,
          msg: gui.ERR_LoiKetNoiMayChu,
        };
      });
  },

  getTaskEvent(dto, token) {
    log.info('fetch =======  getTaskEvent', getTaskEventUrl, dto, token);

    return fetch(`${getTaskEventUrl}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      },
      body: JSON.stringify(dto),
    })
      .then(ApiUtils.checkStatus)
      .then(response => {
        return response.json();
      })
      .catch(e => {
        log.info('Error in getTaskEvent', e);
        return {
          status: 101,
          msg: gui.ERR_LoiKetNoiMayChu,
        };
      });
  },

  getDanhMucRieng(dto, token) {
    log.info('fetch =======  getDanhMucRieng', getDanhMucRiengUrl, dto, token);
    return fetch(`${getDanhMucRiengUrl}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      },
      body: JSON.stringify(dto),
    })
      .then(ApiUtils.checkStatus)
      .then(response => {
        return response.json();
      })
      .catch(e => {
        log.info('Error in getDanhMucRieng', e);
        return {
          status: 101,
          msg: gui.ERR_LoiKetNoiMayChu,
        };
      });
  },

  getDanhMuc(dto, token) {
    log.info('fetch =======  getDanhMuc', getDanhMucUrl, dto, token);
    return fetch(`${getDanhMucUrl}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      },
      body: JSON.stringify(dto),
    })
      .then(ApiUtils.checkStatus)
      .then(response => {
        return response.json();
      })
      .catch(e => {
        log.info('Error in getDanhMucUrl', e);
        return {
          status: 101,
          msg: gui.ERR_LoiKetNoiMayChu,
        };
      });
  },

  getQuyTrinhDetail(dto, token) {
    log.info(
      'fetch =======  getQuyTrinhDetailUrl',
      getQuyTrinhDetailUrl,
      dto,
      token,
    );

    return fetch(`${getQuyTrinhDetailUrl}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      },
      body: JSON.stringify(dto),
    })
      .then(ApiUtils.checkStatus)
      .then(response => {
        return response.json();
      })
      .catch(e => {
        log.info('Error in getQuyTrinhDetailUrl', e);
        return {
          status: 101,
          msg: gui.ERR_LoiKetNoiMayChu,
        };
      });
  },

  getQuyTrinhByCustomerID(dto, token) {
    log.info(
      'fetch =======  getQuyTrinhByCustomerIDUrl',
      getQuyTrinhByCustomerIDUrl,
      dto,
      token,
    );

    return fetch(`${getQuyTrinhByCustomerIDUrl}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      },
      body: JSON.stringify(dto),
    })
      .then(ApiUtils.checkStatus)
      .then(response => {
        return response.json();
      })
      .catch(e => {
        log.info('Error in getQuyTrinhByCustomerIDUrl', e);
        return {
          status: 101,
          msg: gui.ERR_LoiKetNoiMayChu,
        };
      });
  },

  getMetaDataTask(dto, token) {
    log.info('fetch =======  getMetaDataTask', getMetaDataTaskUrl, dto, token);
    return fetch(`${getMetaDataTaskUrl}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      },
      body: JSON.stringify(dto),
    })
      .then(ApiUtils.checkStatus)
      .then(response => {
        return response.json();
      })
      .catch(e => {
        log.info('Error in getMetaDataTask', e);
        return {
          status: 101,
          msg: gui.ERR_LoiKetNoiMayChu,
        };
      });
  },
  getMetaDataComponent(dto, token) {
    log.info(
      'fetch =======  getMetaDataComponent',
      getMetaDataComponentUrl,
      dto,
      token,
    );
    return fetch(`${getMetaDataComponentUrl}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      },
      // body: JSON.stringify(dto),
    })
      .then(ApiUtils.checkStatus)
      .then(response => {
        return response.json();
      })
      .catch(e => {
        log.info('Error in getMetaDataComponent', e);
        return {
          status: 101,
          msg: gui.ERR_LoiKetNoiMayChu,
        };
      });
  },

  getEventHistory(dto, token) {
    log.info('fetch =======  getEventHistory', getEventHistoryUrl, dto, token);

    return fetch(`${getEventHistoryUrl}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      },
      body: JSON.stringify(dto),
    })
      .then(ApiUtils.checkStatus)
      .then(response => {
        return response.json();
      })
      .catch(e => {
        log.info('Error in getEventHistoryUrl', e);
        return {
          status: 101,
          msg: gui.ERR_LoiKetNoiMayChu,
        };
      });
  },

  createTaskEvent(dto, token) {
    log.info(
      'fetch =======  createTaskEventUrl',
      createTaskEventUrl,
      dto,
      token,
    );

    return fetch(`${createTaskEventUrl}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      },
      body: JSON.stringify(dto),
    })
      .then(ApiUtils.checkStatus)
      .then(response => {
        return response.json();
      })
      .catch(e => {
        log.info('Error in createTaskEventUrl', e);
        return {
          status: 101,
          msg: gui.ERR_LoiKetNoiMayChu,
        };
      });
  },

  updateTaskEvent(dto, token) {
    log.info(
      'fetch =======  updateTaskEventUrl',
      updateTaskEventUrl,
      dto,
      token,
    );

    return fetch(`${updateTaskEventUrl}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      },
      body: JSON.stringify(dto),
    })
      .then(ApiUtils.checkStatus)
      .then(response => {
        return response.json();
      })
      .catch(e => {
        log.info('Error in updateTaskEvent', e);
        return {
          status: 101,
          msg: gui.ERR_LoiKetNoiMayChu,
        };
      });
  },
  deleteTaskEvent(dto, token) {
    log.info(
      'fetch =======  deleteTaskEventUrl',
      deleteTaskEventUrl,
      dto,
      token,
    );
    return fetch(`${deleteTaskEventUrl}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      },
      body: JSON.stringify(dto),
    })
      .then(ApiUtils.checkStatus)
      .then(response => {
        return response.json();
      })
      .catch(e => {
        log.info('Error in deleteTaskEventUrl', e);
        return {
          status: 101,
          msg: gui.ERR_LoiKetNoiMayChu,
        };
      });
  },
  getEventDetail(dto, token) {
    log.info('fetch =======  getEventDetailUrl', getEventDetailUrl, dto, token);
    return fetch(`${getEventDetailUrl}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      },
      body: JSON.stringify(dto),
    })
      .then(ApiUtils.checkStatus)
      .then(response => {
        return response.json();
      })
      .catch(e => {
        log.info('Error in getEventDetailUrl', e);
        return {
          status: 101,
          msg: gui.ERR_LoiKetNoiMayChu,
        };
      });
  },
};

export {userApi as default};
