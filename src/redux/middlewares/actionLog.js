export const actionLog = (store) => (next) => (action) => {
  console.log('store 当前', store.getState())
  console.log('fire action', action)
  // next就是第二个嵌套函数传入的dispatch函数
  next(action)
  console.log('store 更新', store.getState())
}
