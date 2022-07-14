// const baseSize = 30;
// //32
// // 设置 rem 函数
// function setRem() {
//   // 当前页面宽度相对于 750 宽的缩放比例，可根据自己需要修改。
//   const scale = document.documentElement.clientWidth / 750;
//   // 设置页面根节点字体大小
//   document.documentElement.style.fontSize =
//     baseSize * Math.min(scale, 2) + 'px';
// }
// // 初始化
// setRem();
// // 改变窗口大小时重新设置 rem
// window.onresize = function () {
//   setRem();
// };
window.onload = function () {
  getRem(375, 100);
};
window.onresize = function () {
  getRem(375, 100);
};
function getRem(pwidth, prem) {
  var html = document.getElementsByTagName('html')[0];
  var oWidth =
    document.body.clientWidth || document.documentElement.clientWidth;
  html.style.fontSize = (oWidth / pwidth) * prem + 'px';
}
