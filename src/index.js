module.exports = function solveEquation(equation) {
  let result=[];
  let a=0,
      b=0,
      c=0,
      bTemp=[],
      cTemp=[],
      D=0,
      x1=0,
      x2=0;
  let temp=equation.split('*');
  a=temp[0];
  bTemp=temp[1].split('x^2');
  cTemp=c=c[1]=temp[2].split('x');
  b=bTemp[1].split(' ').join('');
  c=cTemp[1].split(' ').join('');
  b=b-0;
  c=c-0;
  D=b*b-4*a*c;
  if (D<0) {
      return result;
  }
  else if (D===0) {
      x1=-b/2*a;
      return result.push(x1);
  }
  else {
    x1=Math.round((-b+Math.sqrt(D))/(2*a));
    x2=Math.round((-b-Math.sqrt(D))/(2*a));
      if (x1<x2) {
        result.push(x1,x2);
      }
      else {
        result.push(x2,x1);
      }
  }
  return result;
}
