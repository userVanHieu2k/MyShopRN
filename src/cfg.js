let cfg = {
  // server: '127.0.0.1:6022', // dev ios
  // server: '10.0.3.2:6022', // dev android
  // server: 'webapi.qrlabel.net', // dev release
  // server: '127.0.0.1:6090',
  // server: 'v2.qrlabel.net:6070',
  server: 'dev.landber.com:6110', // DEV
  // server: 'inventory.qrlabel.net:6100', // PRODUCTION
  // server: '127.0.0.1:6110',
  serverTOT: 'totgate.com', // server TOT
  // server: 'admin.qrlabel.net:6070'
};

cfg.rootUrl = `http://${cfg.server}/api`;
cfg.rootTOTUrl = `http://${cfg.serverTOT}/api`;
cfg.rootSsoUrl = `http://${cfg.server}/api/sso`;
cfg.rootAppUrl = `http://${cfg.server}/api`;
cfg.socketUrl = `http://${cfg.server}`;

cfg.maxWidth = 1024;
cfg.maxHeight = 1024;
cfg.imageQuality = 100;
cfg.imageMinSize = 380;

export default cfg;
