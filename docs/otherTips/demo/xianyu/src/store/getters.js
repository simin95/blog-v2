// getters是store的计算属性，用来加工state里的数据
// 使用时：this.$store.getters

const getters = {
  login: state => state.isLogin,
};

export default getters;
