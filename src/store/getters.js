/*
 * @Date: 2022-01-27 07:36:48
 * @LastEditTime: 2022-01-27 09:48:47
 */
const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device
  // token: state => state.user.token,
  // avatar: state => state.user.avatar,
  // name: state => state.user.name
}
export default getters
