export function parseFileSize(fileSize) {
  if (fileSize < 1024) {
    return fileSize + "B";
  }

  const kbSize = Math.floor(fileSize / 1024);
  if (kbSize < 1024) {
    return kbSize + "KB";
  }

  const mbSize = Math.floor(kbSize / 1024);
  if (mbSize < 1024) {
    return mbSize + "MB";
  }

  const gbSize = Math.floor(mbSize / 1024);
  if (gbSize < 1024) {
    return gbSize + "GB";
  }

  return kbSize;
}

export function sortEnbxs(enbxs) {
  // 按课件组 / 更新时间降序
  const updateTimeSort = (b, a) =>
    Number(a.update_time) - Number(b.update_time);
  const res = enbxs.filter(c => c.isGroup).sort(updateTimeSort);
  const enbx = enbxs.filter(c => !c.isGroup).sort(updateTimeSort);
  res.push(...enbx);
  return res;
}

// 云课件时间排序
export function sortGroups(groups) {
  // 按课件组 / 更新时间降序
  const updateTimeSort = (b, a) => Number(a.modifyTime) - Number(b.modifyTime);
  const res = groups.filter(c => c.isGroup).sort(updateTimeSort);
  return res;
}

// 资料夹时间排序
export function sortDriverList(list) {
  const sortFunc = (b, a) => Number(a.updateTime) - Number(b.updateTime);
  const folders = list.filter(c => !c.isFile).sort(sortFunc);
  const files = list.filter(c => c.isFile).sort(sortFunc);
  return [...folders, ...files];
}

export function isWeixin() {
  return /micromessenger/.test(navigator.userAgent.toLowerCase());
}

/**
 * 从前面开始截取字符串
 * @param {string} str 被截取的字符串
 * @param {num} minlength 被截取的最大长度
 * @param {string} replaceStr 替换的字符串
 */
export function curStringStart(str, minlength, replaceStr) {
  if (str.length > minlength) {
    return replaceStr
      ? str.substring(0, minlength) + replaceStr
      : str.substring(0, minlength);
  } else {
    return str;
  }
}
