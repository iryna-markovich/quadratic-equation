module.exports = function solveEquation(equation) {
  let equationArr = equation.split(' ');
  let a;
  let b;
  let c;

  if (Number.isInteger(+equationArr[0])) {
    a = equationArr[0];
  }

  if (Number.isInteger(+equationArr[getIndex() + 2])) {
    b = equationArr[getIndex() + 2];
    if (equationArr[getIndex() + 2 - 1] == '-') {
      b = -b;
    }
  }

  if (Number.isInteger(+equationArr[equationArr.length - 1])) {
    c = equationArr[equationArr.length - 1];
    if (equationArr[equationArr.length - 2] == '-') {
      c = -c;
    }
  }

  function getIndex() {
    for (let i = 0; i < equationArr.length; i++) {
      if (equationArr[i] == 'x^2') {
        return i;
      }
    }
  }

  function sorter(a, b) {
    return a - b;
  }
  
  let discriminant = b * b - 4 * a * c;

  let x1 = Math.round((-b + Math.sqrt(discriminant)) / (2 * a));
  let x2 = Math.round((-b - Math.sqrt(discriminant)) / (2 * a));

  let solutions = [x1, x2];
  solutions.sort(sorter);

  return solutions;
}