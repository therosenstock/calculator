
let expr = '';
const elements = document.querySelectorAll('[data-value]')
console.log(elements)
const result = document.getElementById('result')
const equals = document.getElementById('btnEquals')
const clear = document.getElementById('btnClear')
const arrow = document.getElementById('btnArrow')

elements.forEach(element => {
  element.addEventListener('click', () => {
    const value = element.innerHTML;
    expr += value;
    result.innerHTML = expr;
  })
})

equals.addEventListener('click', () => {
  try{
  result.innerHTML = eval(expr);
  expr = '';
  }catch{
  result.innerHTNL = eval(expr);
  expr = '';
  }
})

clear.addEventListener('click', () => {
  expr = '';
  result.innerHTML = '';
})

arrow.addEventListener('click', () => {
  let convert = expr.split('').slice(0,expr.length-1).join('');
  console.log(convert, expr)
  result.innerHTML = convert;
  expr = convert;

})