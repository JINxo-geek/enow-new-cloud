const logo = require('@images/logo.png');
const timecapsule = require('@images/timecapsule.png');
const logobg = {
  backgroundImage: `url(${logo})`,
  width: 120,
  height: 32,
  marginLeft: 30,
  marginTop: 23
};
const btnContentMsg = [
  {
    imgType: 'brush',
    text: '在线白板'
  },
  {
    imgType: 'timecapsule',
    text: '时间胶囊'
  },
  {
    imgType: 'folder',
    text: '新建文件夹'
  },
  {
    imgType: 'upload',
    text: '导入PPT文档'
  }
];

export { logobg, btnContentMsg, timecapsule };
