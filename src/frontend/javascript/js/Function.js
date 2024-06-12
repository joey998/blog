// var a = 99;
// global.a = 1000;
function subFn(){
  // let a = 12;
  // let c = new Function('p1', 'p2', `
  //   return a + p2
  // `)
  // console.log('Function res', c(1, 2))
  let res = eval(`
    function getValue(){
      return a + 1;
    }
    getValue()
  `)
  console.log('eval res', res)
}

subFn()