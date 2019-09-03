const tableTitle = '我的文档';

interface dataSourceType {
  author?: string;
  client_version?: string;
  create_time?: number;
  defaultLicense?: string;
  document_version?: string;
  hasResourcePack?: boolean;
  hash?: string;
  id?: string;
  isGroup?: boolean;
  name?: string;
  permission?: string;
  size?: number;
  update_time?: number;
  version?: number;
  parentId?: string;
}

const dataSource: dataSourceType[] = [
  {
    author: '15577363364',
    client_version: '5.1.6.42833',
    create_time: 1525495279000,
    document_version: '1.0',
    hash: 'acffc23ab73db294911225469db3b564',
    id: '76b52c24-dc23-4aa9-b468-deee9e79ff49',
    isGroup: false,
    name: '希沃-一体机',
    parentId: '',
    size: 23348029,
    update_time: 1525495279000,
    version: 1
  },
  {
    author: '15577363364',
    client_version: '5.1.6.44422',
    create_time: 1527495756000,
    document_version: '1.0',
    hash: 'da8497f508541d6effd5a317b332ecba',
    id: '4de4fb44-4241-438b-8d89-6a54ae84b312',
    isGroup: false,
    name: '大班综合《永别了，袜子》',
    parentId: '',
    size: 117308450,
    update_time: 1527495756000,
    version: 1
  },
  {
    author: '15577363364',
    client_version: '5.1.6.44422',
    create_time: 1527496358000,
    document_version: '1.0',
    hash: 'd8bb67722b3c30af5615bb99019518c9',
    id: '21f6582d-e364-4eab-a255-b52d38baf50e',
    isGroup: false,
    name: 'EN 表格 Enow 解析问题',
    parentId: '',
    size: 298829,
    update_time: 1527496358000,
    version: 1
  },
  {
    author: '15577363364',
    client_version: '5.1.6.44427',
    create_time: 1527648508000,
    document_version: '1.0',
    hash: '773484e207d9d768694df98b1331ace5',
    id: 'b8a68344-add8-406a-9f71-575a100ea133',
    isGroup: false,
    name: '希沃投影白板分享（内部）-201805',
    parentId: '',
    size: 72263051,
    update_time: 1527648508000,
    version: 1
  },
  {
    author: '15577363364',
    client_version: '5.1.6.44427',
    create_time: 1527671337000,
    document_version: '1.0',
    hash: '130dbe7dfe8afecb2c04c7500dd3cd2d',
    id: '9dd3a781-a099-4c8e-8200-583f8de67b45',
    isGroup: false,
    name: '5月份care月总',
    parentId: '',
    size: 2683315,
    update_time: 1527671337000,
    version: 1
  },
  {
    author: '15577363364',
    client_version: '5.1.6.44427',
    create_time: 1527825379000,
    document_version: '1.0',
    hash: '44cef93b107868911917aa35225d211c',
    id: 'cd0d3be4-086a-454b-92bf-9b429275f092',
    isGroup: false,
    name: '埋点测试工具',
    parentId: '',
    size: 3600038,
    update_time: 1527825379000,
    version: 1
  },
  {
    author: '15577363364',
    client_version: '5.1.4.35834',
    create_time: 1528426216000,
    document_version: '1.0',
    hash: '4a886f3e61f234cb977d7e99b5afe2dd',
    id: '567f7348-4220-4915-bdc1-483c7c0a8634',
    isGroup: false,
    name: '2017-10-27-5.1.3.34555',
    parentId: '',
    size: 319025743,
    update_time: 1528426216000,
    version: 1
  },
  {
    author: '15577363364',
    client_version: '',
    create_time: 1528786948000,
    document_version: '',
    hash: '',
    id: '6bb63711-92c9-4758-be54-1f217a1ecc0b',
    isGroup: true,
    name: '其他',
    parentId: '',
    size: 0,
    update_time: 1528786960000,
    version: 0
  },
  {
    author: '15577363364',
    client_version: '5.1.6.44637',
    create_time: 1528941340000,
    document_version: '1.0',
    hash: '7f5b0382440acff1511e1829506558ef',
    id: '47347a1c-dada-4afa-b26c-b1758611af54',
    isGroup: false,
    name: 'ENOW报错测试课件',
    parentId: '',
    size: 138711,
    update_time: 1529666908000,
    version: 10
  },
  {
    author: '15577363364',
    client_version: '5.1.6.45398',
    create_time: 1529921884000,
    document_version: '1.0',
    hash: 'a7f873fccd64dbfc839a12e0648d00ae',
    id: 'a4f1706b-d407-4d6f-8578-8e7adda7010b',
    isGroup: false,
    name: '锁定课堂活动',
    size: 2346955,
    update_time: 1529921884000,
    version: 1
  }
];

const bttonclass = {
  width: 204,
  height: 40,
  marginLeft: 30,
  marginTop: 23,
  backgroundColor: 'rgba(101,173,89,1)',
  color: 'rgba(255,255,255,1)',
  borderRadius: '2px 2px 2px 2px',
  fontSize: 14,
  fontFamily: 'Roboto',
  boxShadow: '0px 3px 3px 0px'
};

export { dataSource, bttonclass, tableTitle };
