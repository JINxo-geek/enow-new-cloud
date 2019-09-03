const MIN = 60 * 1e3;
const HOUR = MIN * 60;
const DAY = HOUR * 24;
const YEAR = DAY * 365;
const MONTH = DAY * 30;
Date.prototype.fromNow = function() {
  const del = this.getTime() - Date.now();
  const abs = Math.abs(del);
  if (abs < MIN) {
    return '几秒前';
  }
  const periods = {
    年: abs / YEAR,
    月: (abs % YEAR) / MONTH,
    天: (abs % MONTH) / DAY,
    小时: (abs % DAY) / HOUR,
    分钟: (abs % HOUR) / MIN
  };
  for (const k in periods) {
    const num = Math.floor(periods[k]);
    if (num > 0) {
      const prefix = ['月', '小时'].includes(k) ? '个' : '';
      return `${num}${prefix}${k}前`;
    }
  }
};

Date.prototype.format = function(fmt) {
  // author: meizz
  const o = {
    'M+': this.getMonth() + 1, // 月份
    'd+': this.getDate(), // 日
    'h+': this.getHours(), // 小时
    'm+': this.getMinutes(), // 分
    's+': this.getSeconds(), // 秒
    'q+': Math.floor((this.getMonth() + 3) / 3), // 季度
    'S': this.getMilliseconds() // 毫秒
  };
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(
      RegExp.$1,
      (this.getFullYear() + '').substr(4 - RegExp.$1.length)
    );
  }
  for (const k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) {
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length == 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length)
      );
    }
  }
  return fmt;
};

export const timeBeauty = time => {
  const m = new Date(time);
  const fromNow: any = m.fromNow();
  const day = m.format('yyyy-MM-dd');
  const tooOld = /[年月天]/.test(fromNow);
  return tooOld ? day : fromNow;
};

export const timeBeautyNew = time => {
  const ONE_MINUTES = 60 * 1000,
    THREE_MINUTES = 3 * 60 * 1000,
    ONE_HOUR = 60 * 60 * 1000,
    ONE_DAY = 24 * 60 * 60 * 1000;
  const now = new Date().getTime();
  const interval = now - time;
  let beautyTime;
  if (interval < THREE_MINUTES) {
    beautyTime = '刚刚';
  } else if (interval < ONE_HOUR) {
    beautyTime = Math.round(interval / ONE_MINUTES) + '分钟前';
  } else if (interval < ONE_DAY) {
    beautyTime = Math.round(interval / ONE_HOUR) + '小时前';
  } else {
    beautyTime = new Date(time).format('yyyy-MM-dd');
  }
  return beautyTime;
};
