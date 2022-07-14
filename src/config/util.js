import axios from './https.js';

import store from '@/store';
export default {
  // 时间戳转日期
  formateTime: function (time) {
    let date;
    if (time.length < 11) {
      // 秒
      date = new Date(time * 1000);
    } else {
      // 豪秒
      date = new Date(time);
    }

    let Y = date.getFullYear();
    let M =
      date.getMonth() + 1 < 10
        ? '0' + (date.getMonth() + 1)
        : date.getMonth() + 1;
    let D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
    return Y + '-' + M + '-' + D;
  },
  //时间转换
  timeChange: function (val, type) {
    let chinaStandard = val;
    let newTime;
    let date = new Date(chinaStandard);
    let y = date.getFullYear();
    let m = date.getMonth() + 1;
    m = m < 10 ? '0' + m : m;
    let d = date.getDate();
    d = d < 10 ? '0' + d : d;
    let h = date.getHours();
    h = h < 10 ? '0' + h : h;
    let minute = date.getMinutes();
    let s = date.getSeconds();
    minute = minute < 10 ? '0' + minute : minute;
    s = s < 10 ? '0' + s : s;
    if (type == 1) {
      newTime = y + '-' + m + '-' + d + ' ' + h + ':' + minute + ':' + s;
    } else if (type == 2) {
      newTime = y + '-' + m + '-' + d;
    }
    return newTime;
  },
  //时间日期格式化
  dateFormat(dateObj, format) {
    let date = {
      'M+': dateObj.getMonth() + 1,
      'd+': dateObj.getDate(),
      'h+': dateObj.getHours(),
      'm+': dateObj.getMinutes(),
      's+': dateObj.getSeconds(),
      'q+': Math.floor((dateObj.getMonth() + 3) / 3),
      'S+': dateObj.getMilliseconds(),
    };
    if (/(y+)/i.test(format)) {
      format = format.replace(
        RegExp.$1,
        (dateObj.getFullYear() + '').substr(4 - RegExp.$1.length),
      );
    }
    for (let k in date) {
      if (new RegExp('(' + k + ')').test(format)) {
        format = format.replace(
          RegExp.$1,
          RegExp.$1.length === 1
            ? date[k]
            : ('00' + date[k]).substr(('' + date[k]).length),
        );
      }
    }
    return format;
  },
  //封装axios post  处理hearders
  axiosPost(apiName, params) {
    return new Promise((resolve, reject) => {
      axios
        .post(apiName, params, {
          headers: {
            corpid: store.state.userInfo.corpid,
            userid: store.state.userInfo.userid,
          },
        })
        .then(
          response => {
            resolve(response);
          },
          err => {
            reject(err);
          },
        )
        .catch(error => {
          reject(error);
        });
    });
  },
  //封装axios get   处理hearders
  axiosGet(apiName, param) {
    return new Promise((resolve, reject) => {
      axios
        .get(
          apiName,
          { params: param },
          {
            headers: {
              corpid: store.state.userInfo.corpid,
              userid: store.state.userInfo.userid,
            },
          },
        )
        .then(
          response => {
            resolve(response);
          },
          err => {
            reject(err);
          },
        )
        .catch(error => {
          reject(error);
        });
    });
  },
  //   钉钉api鉴权
//   checkding() {
//     axios
//       .post(
//         '/ding/jsapiAuth',
//         {
//           url: window.location.href,
//         },
//         {
//           headers: {
//             corpid: store.state.userInfo.corpid,
//             userid: store.state.userInfo.userid,
//           },
//         },
//       )
//       .then(res => {
//         if (res.data.code == 1) {
//           let tokenData = res.data.data;
//           dd.config({
//             agentId: tokenData.agentId, // 必填，微应用ID
//             corpId: tokenData.corpId, //必填，企业ID
//             timeStamp: tokenData.timeStamp, // 必填，生成签名的时间戳
//             nonceStr: tokenData.nonceStr, // 必填，生成签名的随机串
//             signature: tokenData.signature, // 必填，签名
//             type: 0, //选填。0表示微应用的jsapi,1表示服务窗的jsapi；不填默认为0。该参数从dingtalk.js的0.8.3版本开始支持
//             jsApiList: [
//               'biz.contact.complexPicker',
//               'biz.contact.choose',
//               'runtime.info',
//               'device.notification.confirm',
//               'device.notification.alert',
//               'device.notification.prompt',
//               'biz.ding.post',
//               'biz.util.openLink',
//               'biz.util.uploadAttachment',
//               'biz.cspace.preview',
//               'biz.util.downloadFile',
//               'biz.util.openSlidePanel',
//               'biz.contact.departmentsPicker',
//               'biz.ding.create',
//             ], // 必填，需要使用的jsapi列表，注意：不要带dd。
//           });
//           dd.error(function (err) {
//             console.log(JSON.stringify(err));
//           });
//         }
//       });
//   },

  //计算大小
  renderSize: function (value) {
    if (null == value || value == '') {
      return '0 Bytes';
    }
    var unitArr = new Array(
      'Bytes',
      'KB',
      'MB',
      'GB',
      'TB',
      'PB',
      'EB',
      'ZB',
      'YB',
    );
    var index = 0;
    var srcsize = parseFloat(value);
    index = Math.floor(Math.log(srcsize) / Math.log(1024));
    var size = srcsize / Math.pow(1024, index);
    size = size.toFixed(2); //保留的小数位数
    return size + unitArr[index];
  },
  //上传附件显示图片
    imgData(leixing) {
      console.log(leixing, 'wareHousewareHouse');
    let $url = '';
    let $leixing = leixing.split('.')[1];
    switch ($leixing) {
      case 'bmp':
        $url =
          'https://dingyunlaowu.oss-cn-hangzhou.aliyuncs.com/user-dir/dYPyGjY2sM1657262582271.png';
        break;

      case 'jpg':
        $url =
          'https://dingyunlaowu.oss-cn-hangzhou.aliyuncs.com/user-dir/6CXeeSiaii1657262711133.png';
        break;

      case 'png':
        $url =
          'https://dingyunlaowu.oss-cn-hangzhou.aliyuncs.com/user-dir/rQHGXbfEFs1657262850420.png';

        break;

      case 'tif':
        $url =
          'https://dingyunlaowu.oss-cn-hangzhou.aliyuncs.com/user-dir/7nsRFrEKKx1657262905104.png';

        break;

      case 'gif':
        $url =
          'https://dingyunlaowu.oss-cn-hangzhou.aliyuncs.com/user-dir/SFDPcHQr4s1657262948017.png';

        break;

      case 'pcx':
        $url =
          'https://dingyunlaowu.oss-cn-hangzhou.aliyuncs.com/user-dir/7ZFrP3ARCW1657262966802.png';

        break;

      case 'jpeg':
        $url =
          'https://dingyunlaowu.oss-cn-hangzhou.aliyuncs.com/user-dir/c6hpxnhMYb1657262995649.png';

        break;

      case 'tiff':
        $url =
          'https://dingyunlaowu.oss-cn-hangzhou.aliyuncs.com/user-dir/AD8FNCF7Dm1657263016762.png';

        break;

      case 'doc':
        $url =
          'https://dingyunlaowu.oss-cn-hangzhou.aliyuncs.com/user-dir/yrKSRDPZnd1657263051702.png';

        break;

      case 'docx':
        $url =
          'https://dingyunlaowu.oss-cn-hangzhou.aliyuncs.com/user-dir/2nnZBEpNmZ1657263072630.png';

        break;

      case 'xls':
        $url =
          'https://dingyunlaowu.oss-cn-hangzhou.aliyuncs.com/user-dir/Ce5Bx3i2Kk1657263095272.png';

        break;

      case 'xlsx':
        $url =
          'https://dingyunlaowu.oss-cn-hangzhou.aliyuncs.com/user-dir/EW2CWQ8bRa1657263114660.png';

        break;

      case 'pdf':
        $url =
          'https://dingyunlaowu.oss-cn-hangzhou.aliyuncs.com/user-dir/57QDDGD7MJ1657263137837.png';

        break;

      case 'ppt':
        $url =
          'https://dingyunlaowu.oss-cn-hangzhou.aliyuncs.com/user-dir/WQ3pBDPZyi1657263156746.png';

        break;

      case 'pps':
        $url =
          'https://dingyunlaowu.oss-cn-hangzhou.aliyuncs.com/user-dir/dPp5ZyZmQG1657263176243.png';

        break;

      case 'pptx':
        $url =
          'https://dingyunlaowu.oss-cn-hangzhou.aliyuncs.com/user-dir/YwHC5cAkPb1657263193814.png';

        break;

      case 'ppsx':
        $url =
          'https://dingyunlaowu.oss-cn-hangzhou.aliyuncs.com/user-dir/7ffkjS2TpG1657263216072.png';

        break;

      case 'ppa':
        $url =
          'https://dingyunlaowu.oss-cn-hangzhou.aliyuncs.com/user-dir/7ffkjS2TpG1657263216072.png';

        break;

      case 'pot':
        $url =
          'https://dingyunlaowu.oss-cn-hangzhou.aliyuncs.com/user-dir/TbsxTxwKzC1599028442433.png';

        break;

      case 'rar':
        $url =
          'https://dingyunlaowu.oss-cn-hangzhou.aliyuncs.com/user-dir/5ZefDfefAP1599028449154.png';

        break;

      case 'zip':
        $url =
          'https://dingyunlaowu.oss-cn-hangzhou.aliyuncs.com/user-dir/5ZefDfefAP1599028449154.png';

        break;

      case 'AVI':
        $url =
          'https://dingyunlaowu.oss-cn-hangzhou.aliyuncs.com/user-dir/MW2Z6anDFK1599028459067.png';

        break;

      case 'mov':
        $url =
          'https://dingyunlaowu.oss-cn-hangzhou.aliyuncs.com/user-dir/MW2Z6anDFK1599028459067.png';

        break;

      case 'rmvb':
        $url =
          'https://dingyunlaowu.oss-cn-hangzhou.aliyuncs.com/user-dir/MW2Z6anDFK1599028459067.png';

        break;

      case 'rm':
        $url =
          'https://dingyunlaowu.oss-cn-hangzhou.aliyuncs.com/user-dir/MW2Z6anDFK1599028459067.png';

        break;

      case 'FLV':
        $url =
          'https://dingyunlaowu.oss-cn-hangzhou.aliyuncs.com/user-dir/MW2Z6anDFK1599028459067.png';

        break;

      case 'mp4':
        $url =
          'https://dingyunlaowu.oss-cn-hangzhou.aliyuncs.com/user-dir/MW2Z6anDFK1599028459067.png';

        break;

      case '3GP':
        $url =
          'https://dingyunlaowu.oss-cn-hangzhou.aliyuncs.com/user-dir/MW2Z6anDFK1599028459067.png';

        break;

      case 'dwg':
        $url =
          'https://dingyunlaowu.oss-cn-hangzhou.aliyuncs.com/user-dir/2GytfM5BY41599028466155.png';

        break;

      case 'dxf':
        $url =
          'https://dingyunlaowu.oss-cn-hangzhou.aliyuncs.com/user-dir/2GytfM5BY41599028466155.png';

        break;

      case 'dwt':
        $url =
          'https://dingyunlaowu.oss-cn-hangzhou.aliyuncs.com/user-dir/2GytfM5BY41599028466155.png';

        break;

      case 'ai':
        $url =
          'https://dingyunlaowu.oss-cn-hangzhou.aliyuncs.com/user-dir/3QX6Xwexr71599028901919.png';

        break;

      case '3dm':
        $url =
          'https://dingyunlaowu.oss-cn-hangzhou.aliyuncs.com/user-dir/epfBYhnxZF1599028496013.png';

        break;

      case 'dae':
        $url =
          'https://dingyunlaowu.oss-cn-hangzhou.aliyuncs.com/user-dir/w6wXH3rRJn1599028908835.png';

        break;

      case 'abc':
        $url =
          'https://dingyunlaowu.oss-cn-hangzhou.aliyuncs.com/user-dir/AHRi6Wdyd71599028501782.png';

        break;

      case 'glTF':
        $url =
          'https://dingyunlaowu.oss-cn-hangzhou.aliyuncs.com/user-dir/AHRi6Wdyd71599028501782.png';

        break;

      case 'fbx':
        $url =
          'https://dingyunlaowu.oss-cn-hangzhou.aliyuncs.com/user-dir/AHRi6Wdyd71599028501782.png';

        break;

      case 'bvh':
        $url =
          'https://dingyunlaowu.oss-cn-hangzhou.aliyuncs.com/user-dir/AHRi6Wdyd71599028501782.png';

        break;

      case 'obj':
        $url =
          'https://dingyunlaowu.oss-cn-hangzhou.aliyuncs.com/user-dir/AHRi6Wdyd71599028501782.png';

        break;

      case 'stl':
        $url =
          'https://dingyunlaowu.oss-cn-hangzhou.aliyuncs.com/user-dir/AHRi6Wdyd71599028501782.png';

        break;

      case '3ds':
        $url =
          'https://dingyunlaowu.oss-cn-hangzhou.aliyuncs.com/user-dir/AHRi6Wdyd71599028501782.png';

        break;

      case 'ply':
        $url =
          'https://dingyunlaowu.oss-cn-hangzhou.aliyuncs.com/user-dir/AHRi6Wdyd71599028501782.png';

        break;

      case 'x3d':
        $url =
          'https://dingyunlaowu.oss-cn-hangzhou.aliyuncs.com/user-dir/AHRi6Wdyd71599028501782.png';

        break;

      default:
        $url =
          'https://dingyunlaowu.oss-cn-hangzhou.aliyuncs.com/user-dir/5wH5QxaXPB1599029452541.png';
    }
    return $url;
  },
};
