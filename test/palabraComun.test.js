const {
  encontrarPalabraMasComun,
  sumaNumerosMayores,
  ordenarObjeto,
  numString,
  stringMasLargo,
  numPrimo,
  arrPares,
  unirObj,
  factorial,
  palindromo,
} = require("../index");

describe("Encontrar la palabra más común en un texto dado.", () => {
  test('Debe devolver "adios"', () => {
    expect(encontrarPalabraMasComun("adios")).toBe("adios");
  });
  test('Texto de la pagina de Jest deve devolver "you"', () => {
    expect(
      encontrarPalabraMasComun(
        "In tests, you sometimes need to distinguish between undefined, null, and false, but you sometimes do not want to treat these differently. Jest contains helpers that let you be explicit about what you want."
      )
    ).toBe("you");
  });
});

describe("Suma el numero mayor del primer arreglo con el mayor del segundo", () => {
  test("Devera devolver 7", () => {
    expect(sumaNumerosMayores([1, 2, 3], [4, 3, 1])).toBe(7);
  });

  test("Devera devolver 49", () => {
    expect(sumaNumerosMayores([4, 21, 35], [5, 12, 14])).toBe(49);
  });
});

describe("Ordenar un arreglo dependiendo lo que se le pase por parametro", () => {
  let obj = [
    { name: "Fernando", edad: 20, altura: 1.69 },
    { name: "Toledo", edad: 21, altura: 1.51 },
    { name: "Andres", edad: 19, altura: 1.57 },
  ];
  let edad = [
    { altura: 1.51, edad: 21, name: "Toledo" },
    { altura: 1.69, edad: 20, name: "Fernando" },
    { altura: 1.57, edad: 19, name: "Andres" },
  ];

  let altura = [
    { altura: 1.69, edad: 20, name: "Fernando" },
    { altura: 1.57, edad: 19, name: "Andres" },
    { altura: 1.51, edad: 21, name: "Toledo" },
  ];

  test("Ordenar el objeto por edad", () => {
    expect(ordenarObjeto(obj, "edad")).toEqual(edad);
  });

  test("Ordenar el objeto por Altura", () => {
    expect(ordenarObjeto(obj, "altura")).toEqual(altura);
  });
});

describe('Crear una función que dado un número, devuelva su representación en palabras (por ejemplo, 123 -"ciento veintitrés")', () => {
  test("Deve devolver cien veinte y tres", () => {
    expect(numString(123)).toBe("cien veinte y tres");
  });
  test("Debe Devolver docientos treinta y siete", () => {
    expect(numString(237)).toBe("docientos treinta y siete");
  });
});

describe("Crear una función que dado un strings, devuelva el subString más largo.", () => {
  test('Devolver "Mundo" de "Hola mundo"', () => {
    expect(stringMasLargo("hola mundo")).toBe("mundo");
  });

  test('Devolver "estas?" de "como estas?"', () => {
    expect(stringMasLargo("como estas?")).toBe("estas?");
  });
});

describe("Crear una función que determine si un número dado es un número primo.", () => {
  test('Devolver "True" por que 7 es primo', () => {
    expect(numPrimo(7)).toBe(true);
  });

  test('Devolver "false" por que 4 no es primo', () => {
    expect(numPrimo(4)).toBe(false);
  });
});

describe("Crear una función que dado un array de números, devuelva un nuevo array con solo los números pares.", () => {
  test("Devolver [2,4,6]", () => {
    expect(arrPares([1, 2, 3, 4, 5, 6, 7])).toEqual([2, 4, 6]);
  });

  test("Devolver [2]", () => {
    expect(arrPares([1, 2, 7, 5, 3, 9, 13, 15])).toEqual([2]);
  });
});

describe("Crear una función que dado un array de objetos, devuelva un objeto que contenga las propiedades de todos los objetos del array (unión)", () => {
  const obj = [{ name: "toledo" }, { edad: 20 }, { altura: 1.7 }];
  const result = { name: "toledo", edad: 20, altura: 1.7 };
  test("Unir los objetos del array en un solo objeto", () => {
    expect(unirObj(obj)).toEqual(result);
  });

  const casa = [{ precio: 130.0 }, { color: "amarillo" }, { mascotas: false }];
  const result2 = { precio: 130.0, color: "amarillo", mascotas: false };
  test("Devolver un solo objeto", () => {
    expect(unirObj(casa)).toEqual(result2);
  });
});

describe("Crear una función que calcule el factorial de un número dado.", () => {
  test("Devolver el factorial de 7", () => {
    expect(factorial(7)).toBe(5040);
  });
  test("Devolver el factorial de 5", () => {
    expect(factorial(5)).toBe(120);
  });
});

describe("Crear una función que dado un string, devuelva true si es un palíndromo y false si no lo es.", () => {
  test('Devolver "true" ya que "radar" es palindromo', () => {
    expect(palindromo("radar")).toBe(true);
  });
  test('Devolver "false" ya que hola no es palindromo', () => {
    expect(palindromo("hola")).toBe(false);
  });
});
