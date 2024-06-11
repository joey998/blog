function getValue() {
  let values = []
  let value1 = fetch('http://baidu.com').then(res => {
    values.push(res)
    yield res;
  })
    .then(res => {
      console.log('res', res);
    })
    .catch(err2 => {
      console.log('err2', err2)
    })
}

getValue()