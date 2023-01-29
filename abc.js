var romanToInt = function(s) {
  const I = 1;
  const V = 5;
  const X = 10;
  const L = 50;
  const C = 100;
  const D = 500;
  const M = 1000;

  let last = 0;
  let result = 0;

  let b = s
  let d = b.toUpperCase();

  let u;

  for (let i = 0; i < d.length; i++) {
      if (d[i] === "I")  u = 1;
      if (d[i] === "V")  u = 5;
      if (d[i] === "X")  u = 10;
      if (d[i] === "L")  u = 50;
      if (d[i] === "C")  u = 100;
      if (d[i] === "D")  u = 500;
      if (d[i] === "M")  u = 1000;
      generate(u, d[i])
  };

  function generate(s, l) {
    let a = s
    if (last === "I" && l === "V") {
      result = result - 1;
      a = a - 1;
      result = result + a;
    }
    else if (last === "I" && l === "X") {
      result = result - 1;
      a = a - 1;
      result = result + a;
    }
    else if (last === "X" && l === "L") {
      result = result - 10;
      a = a - 10;
      result = result + a;
    }
    else if (last === "X" && l === "C") {
      result = result - 10;
      a = a - 10;
      result = result + a;
    }
    else if (last === "C" && l === "D") {
      result = result - 100;
      a = a - 100;
      result = result + a;
    }
    else if (last === "C" && l === "M") {
      result = result - 100;
      a = a - 100;
      result = result + a;
    } else {
      result = result + a;
    }
    last = l
  }
  return result;
};
let s = 'ilmdcldimcdilxx'
console.log(romanToInt(s));
