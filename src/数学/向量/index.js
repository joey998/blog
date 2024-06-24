// 公式: 向量a.向量b = |a||b|cosAngle。
// 公式：向量a.向量b = (a.X * b.X) + (b.Y * b.Y)
// 结合两者可以求出cosAngle，然后求出比例ratio

/**
 * @typedef Point
 * @property {number} latitude
 * @property {number} longitude
 */

/**
 * @desc: 求其他点在起终点对应直线的投影（ps: 常用地理坐标系是二维坐标系）
 * @param {Point} startPoint 起点
 * @param {Point} endPoint   终点
 * @param {Point} point      其他点
 */
function getAbsorbPoint(startPoint, endPoint, point) {
  const {
      longitude: sX,
      latitude: sY
  } = startPoint
  const {
      longitude: eX,
      latitude: eY
  } = endPoint
  const {
      longitude: pX,
      latitude: pY
  } = point

  let so = [sX, sY];  // 向量so，从原点o指向startPoint
  let eo = [eX, eY];  // 向量eo，从原点o指向endPoint
  let po = [pX, pY];  // 向量po，从原点o指向point 
  let es = [eo[0] - so[0], eo[1] - so[1]]; // 向量es，由向量eo - 向量so
  let ps = [po[0] - so[0], po[1] - so[1]]; // 向量ps，由向量po - 向量so
  let esMang = Math.sqrt(Math.pow(es[0], 2) + Math.pow(es[1], 2)) // 向量es的模
  let psMang = Math.sqrt(Math.pow(ps[0], 2) + Math.pow(ps[1], 2)) // 向量ps的模

  let cosAngle = (es[0] * ps[0] + es[1] * ps[1]) / esMang / psMang;
  let ratio = psMang * cosAngle / esMang; // 其实就是(es[0] * ps[0] + es[1] * ps[1]) / Math.pow(esMang, 2)
  return {
      longitude: sX + ratio * es[0],
      latitude: sY + ratio * es[1]
  }
}