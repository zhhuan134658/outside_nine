import * as API from './axiosInit';

const apiList = {
  userInfo: param => API.POST('user/userinfo', param),
};

const NetWorkReq = (name, param, herders) => apiList[name](param, herders);

export default NetWorkReq;
