function encontrarPalabraMasComun(texto) {
  const arr = texto.split(" ");
  const palabras = new Map();

  arr.map((e) => {
    if (!palabras.has(e)) palabras.set(e, 1);
    else palabras.set(e, palabras.get(e) + 1);
  });

  let palabra = "";
  let concurrencias = 0;

  palabras.forEach((p, a) => {
    if (p > concurrencias) {
      palabra = a;
      concurrencias = p;
    }
  });

  return palabra;
}

function sumaNumerosMayores(l1, l2) {
  return Math.max(...l1) + Math.max(...l2);
}

function ordenarObjeto(arr, valor) {
  const result = arr.sort((ant, post) => {
    if (ant[valor] > post[valor]) return -1;
    if (ant[valor] < post[valor]) return 1;
    return 0;
  });

  return result;
}

function stringMasLargo(str) {
  const arr = str.split(" ");

  let maxStr = "";
  let max = 0;

  arr.forEach((e) => {
    if (e.length > max) {
      max = e.length;
      maxStr = e;
    }
  });

  return maxStr;
}

function numPrimo(num) {
  if (num <= 1) return false;

  for (let a = 2; a <= Math.sqrt(num); a++) {
    if (num % a === 0) {
      return false;
    }
  }

  return true;
}

function arrPares(l1) {
  return l1.filter((e) => e % 2 === 0);
}

function unirObj(arr) {
  return arr.reduce((a, b) => ({ ...a, ...b }), {});
}

function factorial(num) {
  let result = 1;

  for (let a = 2; a <= num; a++) {
    result = result * a;
  }
  return result;
}

function palindromo(str) {
  let arr = str.split("").reverse().join("");
  return arr === str;
}

function numString(num) {
  let u = [
    "",
    "uno",
    "dos",
    "tres",
    "cuatro",
    "cinco",
    "seis",
    "siete",
    "ocho",
    "nueve",
  ];
  let d = [
    "diez",
    "veinte",
    "treinta",
    "cuarenta",
    "cincuenta",
    "secenta",
    "setenta",
    "ochenta",
    "noventa",
  ];

  let c = [
    "cien",
    "docientos",
    "trecientos",
    "cuatrocientos",
    "quinientos",
    "seicientos",
    "setecientos",
    "ochocientos",
    "novecientos",
  ];

  const arr = num.toString().split("");

  if (arr.length == 3)
    return `${c[arr[0] - 1]} ${d[arr[1] - 1]} y ${u[arr[2]]}`;
  else if (arr.length == 2) return `${d[arr[0] - 1]} y ${u[arr[1]]}`;
  else if (arr.length == 1) return `${u[arr[0]]}`;
  else {
    return "Debe ser numero entre 1 al 999";
  }
}
