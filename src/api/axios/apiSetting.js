const LoginModule = {
  requestToken: { //获取Token
    url: '/api/Login/GetJwtToken',
    method: 'get'
  },
  refreshToken: { //请求刷新Token
    url: '/api/Login/RefreshToken',
    method: 'get'
  },
  getLoginByToken: { //根据Token登录
    url: '/api/Login/GetLoginByToken',
    method: 'get'
  },
}

const UserModule = {
  getUserByToken: { //根据Token获取用户信息
    url: '/api/User/GetUserByToken',
    method: 'get'
  },
  getUserInfo: { //获取用户数据
    url: '/api/User/GetUser',
    method: 'get'
  },
  postUser: { //添加用户
    url: '/api/User/PostUser',
    method: 'other'
  },
  putUser: { //更新用户
    url: '/api/User/PutUser',
    method: 'put'
  },
  disableUser: { //禁用用户
    url: '/api/User/DisableUser',
    method: 'delete'
  },
  deleteUesr: { //删除用户
    url: '/api/User/DeleteUser',
    method: 'delete'
  },
}

const DeptModule = {
  getDeptInfo: { //获取部门数据
    url: '/api/Dept/GetDept',
    method: 'get'
  },
  postDept: { //添加部门
    url: '/api/Dept/PostDept',
    method: 'other'
  },
  putDept: { //更新部门
    url: '/api/Dept/PutDept',
    method: 'put'
  },
  disableDept: { //禁用部门
    url: '/api/Dept/DisableDept',
    method: 'delete'
  },
  deleteDept: { //删除部门
    url: '/api/Dept/DeleteDept',
    method: 'delete'
  },
}

const RoleModule = {
  getRoleInfo: { //获取角色数据
    url: '/api/Role/GetRole',
    method: 'get'
  },
  postRole: { //添加角色
    url: '/api/Role/PostRole',
    method: 'other'
  },
  putRole: { //更新角色
    url: '/api/Role/PutRole',
    method: 'put'
  },
  disableRole: { //禁用角色
    url: '/api/Role/DisableRole',
    method: 'delete'
  },
  deleteRole: { //删除角色
    url: '/api/Role/DeleteRole',
    method: 'delete'
  },
  RoleByMenuId: { //绑定菜单
    url: '/api/Role/RoleByMenuId',
    method: 'get'
  },
}

const MenuModule = {
  getMenuInfo: { //获取菜单数据(列表)
    url: '/api/Menu/GetMenu',
    method: 'get'
  },
  getMenuByIds: { //根据菜单数据(树状)
    url: '/api/Menu/GetMenuByIds',
    method: 'get'
  },
  GetMenuBySystemId: { //根据系统Id获取菜单数据（树状）
    url: '/api/Menu/GetMenuBySystemId',
    method: 'get'
  },
  GetParentMenu: { //获取一级菜单
    url: '/api/Menu/GetParentMenu',
    method: 'get'
  },
  postMenu: { //添加菜单
    url: '/api/Menu/PostMenu',
    method: 'other'
  },
  putMenu: { //更新菜单
    url: '/api/Menu/PutMenu',
    method: 'put'
  },
  disableMenu: { //禁用菜单
    url: '/api/Menu/DisableMenu',
    method: 'delete'
  },
  deleteMenu: { //删除菜单
    url: '/api/Menu/DeleteMenu',
    method: 'delete'
  },
}

const SystemModule = {
  getSystemInfo: { //获取系统数据
    url: '/api/System/GetSystem',
    method: 'get'
  },
  postSystem: { //添加系统
    url: '/api/System/PostSystem',
    method: 'other'
  },
  putSystem: { //更新系统
    url: '/api/System/PutSystem',
    method: 'put'
  },
  disableSystem: { //禁用系统
    url: '/api/System/DisableSystem',
    method: 'delete'
  },
  deleteSystem: { //删除系统
    url: '/api/System/DeleteSystem',
    method: 'delete'
  },
}

const PlatformModule = {
  getPlatformInfo: { //获取平台数据
    url: '/api/Platform/GetPlatform',
    method: 'get'
  },
  postPlatform: { //添加平台
    url: '/api/Platform/PostPlatform',
    method: 'other'
  },
  putPlatform: { //更新平台
    url: '/api/Platform/PutPlatform',
    method: 'put'
  },
  disablePlatform: { //禁用平台
    url: '/api/Platform/DisablePlatform',
    method: 'delete'
  },
  deletePlatform: { //删除平台
    url: '/api/Platform/DeletePlatform',
    method: 'delete'
  },
}


const TasksQzModule = {
  getTasksQzInfo: { //获取全部定时任务数据
    url: '/api/TasksQz/GetTasksQz',
    method: 'get'
  },
  postTasksQz: { //添加定时任务
    url: '/api/TasksQz/PostTasksQz',
    method: 'other'
  },
  putTasksQz: { //更新定时任务
    url: '/api/TasksQz/PutTasksQz',
    method: 'put'
  },
  getReCovery: { //重启定时任务
    url: '/api/TasksQz/ReCovery',
    method: 'get'
  },
  getStartJob: { //启动定时任务
    url: '/api/TasksQz/StartJob',
    method: 'get'
  },
  getStopJob: { //停止定时任务
    url: '/api/TasksQz/StopJob',
    method: 'get'
  },
  deleteTask: { //删除定时任务
    url: '/api/TasksQz/DeleteTasksQz',
    method: 'delete'
  },
  getTaskNameSpace: {//获取任务命名空间
    url: '/api/TasksQz/GetTaskNameSpace',
    method: 'get'
  },
}

const LogModule = {
  getAccessLogs: {
    url: '/api/Monitor/GetAccessLogs',
    method: 'get'
  },
}
const FileModule = {
  imgUpload: { //上传图片到服务器
    url: '/api/File/imgUpload',
    method: 'file'
  },
  imgDelete: {
    url: '/api/File/imgDelete',
    method: 'delete'
  },
  fileUpload: {
    url: '/api/File/fileUpload',
    method: 'file'
  },
  fileMerge: { //分片文件合并
    url: '/api/Uploader/FileMerge',
    method: 'get'
  },
}


const VideoModule = {
  // 连云港
  getwaterlistData1: {
    url: "http://36.156.142.83:8086/LYG/api/Monitor/YSY_AddressList", //传参： {type: "",isgroup: 1}
    method: "get"
  },
  getaddress_kh1: {
    url: 'http://36.156.142.83:8086/LYG/api/Monitor/GetAddressList', //传参： {indexcode: url, protocol: "hls"}
    method: 'get'
  },

  // 鼓楼
  getwaterlistData2: {
    url: "http://58.213.48.106/DrainageManagement/Main/BDataQuery/DataQuery.ashx?cmd=Get_SpStation_l", //传参：{type:"6,1,8,12,14,17,18,15"}
    method: "post"
  },
  getaddress_kh2: {
    url: 'http://58.213.48.106/PSManageServices/HKSP/hksp_address.ashx?action=getaddress_kh', //传参：{indexcode: item.hls, protocol: 1, transmode: 1}
    method: 'get'
  },

}

const ApiSetting = {
  ...LoginModule,
  ...SystemModule,
  ...PlatformModule,
  ...UserModule,
  ...DeptModule,
  ...RoleModule,
  ...MenuModule,
  ...TasksQzModule,
  ...LogModule,
  ...FileModule,
  ...VideoModule,
}

export default ApiSetting
