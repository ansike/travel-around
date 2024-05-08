export function makeSerializable<T extends any>(o: T): T {
  return JSON.parse(JSON.stringify(o));
}

export function isMobileDevice() {
  // 检测用户代理
  var userAgent = window.navigator.userAgent.toLowerCase();
  var mobileKeywords = ["iphone", "ipad", "ipod", "android", "webos", "blackberry", "iemobile", "opera mini"];
  for (var i = 0; i < mobileKeywords.length; i++) {
    if (userAgent.indexOf(mobileKeywords[i]) > -1) {
      return true;
    }
  }

  return false;
}