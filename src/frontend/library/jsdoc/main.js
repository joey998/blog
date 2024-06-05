// 导入类型定义
// const { User111 } = require('./types');

/**
 * 获取用户信息
 * @param {User} userId1 - 用户ID
 * @param {module:testModule~getValue} userId1 - 用户ID
 * @returns {User} 用户信息
 */
function getUserInfo(userId) {
  // 模拟从数据库获取用户信息
  const user = {
    id: userId,
    name: 'John Doe',
    email: 'john.doe@example.com',
  };

  return user;
}

/**
 * 
 * @param {*} a 
 * @param {*} b 
 */
function cc(a = 1, b) {
  console.log(1, a, b);
}