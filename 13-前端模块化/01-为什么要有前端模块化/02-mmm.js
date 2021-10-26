var moduleM = (function(){
  var obj = {}
  var flag = true;
  function sum(num1, num2){
    return num1 + num2
  }
  obj.flag = flag;
  obj.sum = sum;
  return obj


}
)()

moduleM.exports = {
  sum: sum,
  flag: flag
}