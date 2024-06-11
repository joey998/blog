function first(a, b, c) {
  console.log("first(): factory evaluated", a, b, c);
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log("first(): called");
  };
}
 
function second() {
  console.log("second(): factory evaluated");
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log("second(): called");
  };
}

function sealed(constructor: Function) {
  Object.seal(constructor);
  Object.seal(constructor.prototype);
}
 
@sealed
class ExampleClass {
  @first(1, 2,3)
  @second()
  methodFn1() {}
}