import React, { useState, useEffect } from "react";

function calculateCountdown(targetDate: string) {
  const now = new Date().getTime();
  const target = new Date(targetDate).getTime();

  // 计算时间差（以毫秒为单位）
  const timeDiff = target - now;
  if (timeDiff < 0) {
    return "";
  }

  // 计算倒计时的天数、小时数、分钟数和秒数
  const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

  if (days > 0) {
    // 将倒计时拼接成字符串（包括天数）
    return `${days}天 ${hours}小时 ${minutes}分 ${seconds}秒`;
  } else if (hours > 0) {
    // 将倒计时拼接成字符串（不包括天数，小时和分钟不同时显示分钟）
    if (hours !== minutes) {
      return `${hours}小时 ${minutes}分 ${seconds}秒`;
    } else {
      return `${hours}小时 ${seconds}秒`;
    }
  } else {
    // 将倒计时拼接成字符串（不包括天数和小时，只显示分钟和秒）
    return `${minutes}分 ${seconds}秒`;
  }
}

function Countdown(targetDate: string) {
  const [countdown, setCountdown] = useState(calculateCountdown(targetDate));

  useEffect(() => {
    const interval = setInterval(() => {
      const updatedCountdown = calculateCountdown(targetDate);
      setCountdown(updatedCountdown);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return { countdown };
}

export { Countdown };
