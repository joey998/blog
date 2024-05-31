function testLog(a,b,cs){console.log(a, b, c);}

function alert(a) {
  alert(a);
}


// 以下每一种都能被匹配到
const a1 = 123;
const a2 = "b";
const a3 = () => 1;

const dict = {
  a: 1,
  b: 2,
  c: 'f',
};