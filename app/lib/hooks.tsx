import { useEffect, useState } from "react";

export function useMobileDevice() {
  const [isMobileDevice, setIsMobileDevice] = useState(false);
  useEffect(() => {
    // 检测用户代理
    var userAgent = window?.navigator.userAgent.toLowerCase();
    var mobileKeywords = [
      "iphone",
      "ipad",
      "ipod",
      "android",
      "webos",
      "blackberry",
      "iemobile",
      "opera mini",
    ];
    for (var i = 0; i < mobileKeywords.length; i++) {
      if (userAgent.indexOf(mobileKeywords[i]) > -1) {
        setIsMobileDevice(true);
        return;
      }
    }
    setIsMobileDevice(false);
  }, []);

  return isMobileDevice;
}
