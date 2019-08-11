import "./indexclass.less";
import renderAction from "./renderAction";
import renderFileType from "./renderFileType";

const tableTitle = "我的文档";

interface dataSourceType {
  key: string;
  name: string;
  date: string;
  size: string;
  type: string;
  showSate?: boolean;
}

let dataSource: Array<dataSourceType> = [
  {
    key: "1",
    name: "文件夹",
    date: "2014-12-24",
    size: "823KB",
    type: "folder"
  },
  {
    key: "2",
    name: "文件夹2",
    date: "2014-12-24",
    size: "823KB",
    type: "folder"
  },
  {
    key: "3",
    name: "文件夹3",
    date: "2014-12-24",
    size: "823KB",
    type: "folder"
  },
  {
    key: "4",
    name: "我是希沃白板5",
    date: "2014-12-24",
    size: "4MB",
    type: "file"
  },
  {
    key: "5",
    name: "我是课件",
    date: "2014-12-24",
    size: "4MB",
    type: "file"
  },
  {
    key: "6",
    name: "文件3",
    date: "2014-12-24",
    size: "4MB",
    type: "file"
  },
  {
    key: "7",
    name: "文件4",
    date: "2014-12-24",
    size: "4MB",
    type: "file"
  },
  {
    key: "8",
    name: "文件5",
    date: "2014-12-24",
    size: "4MB",
    type: "file"
  },
  {
    key: "9",
    name: "文件6",
    date: "2014-12-24",
    size: "4MB",
    type: "file"
  }
];

const bttonclass = {
  width: 204,
  height: 40,
  marginLeft: 30,
  marginTop: 23,
  backgroundColor: "rgba(101,173,89,1)",
  color: "rgba(255,255,255,1)",
  borderRadius: "2px 2px 2px 2px",
  fontSize: 14,
  fontFamily: "Roboto",
  boxShadow: "0px 3px 3px 0px"
};

export { dataSource, bttonclass, renderFileType, tableTitle };
