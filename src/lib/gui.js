import { Dimensions, Platform } from 'react-native';
const { width, height } = Dimensions.get('window');
import DeviceInfo from 'react-native-device-info';
let hasNotch = DeviceInfo.hasNotch();

export const gui = {
  mainColor: '#3F6A51',
  bgScreen: '#0D5CAB',
  bgButton: '#3F6A51',
  linearMain: ['#3F6A51', '#3F6A51'],
  linearButton: ['#2E5DB9', '#2E84B9'],
  linearMinus: ['#2E5DB9', '#2E84B9'],
  linearPlus: ['#2E5DB9', '#2E84B9'],
  linearHeader: ['#3F6A51', '#3F6A51'],
  normalFontSize: 14,
  colorText: '#223655',
  colorBoldText: '#242424',
  colorBlurText: '#747474',
  smallFontSize: 13,
  memSizeText: 15,
  titleFontSize: 17,
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
  navBarHeight:
    Platform.OS === 'ios' ? (hasNotch ? 88 : 68) : hasNotch ? 68 : 48, // check notch
  marginTop: Platform.OS === 'ios' ? (hasNotch ? 44 : 18) : hasNotch ? 18 : 8,
  iconTop: Platform.OS === 'ios' ? 28 : 12,
  ERR_NoInternetConnection: 'Không có kết nối internet!',
  ERR_LoiKetNoiMayChu:
    'Yêu cầu của bạn tạm thời không thực hiện được. Vui lòng thực hiện lại sau!',
  INF_CameraAccess:
    'Bạn cần vào Cài đặt -> inventoryqrlabel -> Bật cho phép inventoryqrlabel truy cập ảnh, camera',
  INF_PhotoAccess:
    'Bạn cần vào Cài đặt -> inventoryqrlabel -> Bật cho phép inventoryqrlabel truy cập ảnh',
};

export default gui;
