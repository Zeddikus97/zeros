
function countDegreeFiveOdd(number, count){
  count = count + (~~(number/5)-~~(number/10));
  if(~~(number/5)==0) return count;
  return countDegreeFiveOdd(number/5, count);
}

function countDegreeFive(number, count){
  count = count + ~~(number/5);
  if(~~(number/5)==0) return count;
  return countDegreeFive(number/5, count);
}

module.exports = function zeros(expression) {
  const numbers = {
    two : 0,
    five : 0
  }
  expression.split('*').forEach(element => {
    let number = element.replace(/!/g, '');
    if(element.replace(/[0-9]/g, '').length==2){
      if(number%2 == 0){
        numbers.two = numbers.two + ~~(number/2)
        numbers.five = numbers.five + countDegreeFive(number/2, 0)
      }
      else numbers.five = numbers.five + countDegreeFiveOdd(number, 0);
    }
    else{
      numbers.two = numbers.two + ~~(number/2)
      numbers.five = numbers.five + countDegreeFive(number, 0);
    }
  });
  return (Math.min(numbers.two, numbers.five))
}
