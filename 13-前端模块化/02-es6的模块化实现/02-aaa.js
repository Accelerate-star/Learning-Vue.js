var name = "小红"
var age = 18
var flag = true

function sum(num1, num2){
  return num1 + num2
}

if(flag){
  console.log(sum(20, 30))
}
// 1、导出方式一
export {
  flag, sum
}
// 2、导出变量和函数和类
export var num = 1000;
export function mul(num1, num2){
  return num1+num2;
}

const address = "北京"
//export default
export default address;