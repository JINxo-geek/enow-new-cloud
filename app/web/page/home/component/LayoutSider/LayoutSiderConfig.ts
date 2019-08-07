import logo from "@images/logo.png";
import timecapsule from "@images/timecapsule.png";
const logobg = {
  backgroundImage: `url(${logo})`,
  width: 120,
  height: 32,
  marginLeft: 30,
  marginTop: 23
};
const contentMsg = [
  {
    imgType: timecapsule,
    text: "在线白板",
    func: () => {
      console.log("被点击");
    }
  },
  {
    imgType: timecapsule,
    text: "时间胶囊",
    func: () => {
      console.log("被点击");
    }
  },
  {
    imgType: timecapsule,
    text: "新建文件夹",
    func: () => {
      console.log("被点击");
    }
  },
  {
    imgType: timecapsule,
    text: "导入PPT文档",
    func: () => {
      console.log("被点击");
    }
  }
];

export { logobg, contentMsg, timecapsule };
