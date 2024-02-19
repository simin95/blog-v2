const state= {
  curIndex: 0,    // 底部导航栏 0:闲鱼 1:鱼塘 3:消息  4:我的
  isLogin: false, // 是否登录状态 true: 登录 false: 未登录
  username: '',   // 用户名 ，在登录后有，退出登录后清除为null
  starnum: 39,    // 被赞数
  focusnum: 20,   // 关注数
  fannum: 222,    // 粉丝数
  fabunum: 0,     // 我发布的数量
  sellnum: 0,     // 我卖出的数量
  buynum: 0,      // 我买到的数量
  money: 0,       // 
  likenum: 0,     // 
  userinfo: {},   // 储存上一次的用户登录信息（头像，密码，用户名）
  news: '',       // 
  address: {},    // 我的地址
  goods: [],      // 我买到的
  fabuinfo: []    // 我发布的商品信息
}

export default state