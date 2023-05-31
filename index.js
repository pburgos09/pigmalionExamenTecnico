//Prueba tecnica Pigmalion
//Lenguaje: Javascript

// nums = arreglo de numeros, requiredSum = numero
//entonces tomo el primer numero de nums y a su vez recorro el arreglo
//Voy sumando el primer numero con los demas hasta que la suma diera requiredSum
//si no sucede agarro el 2do numero del arreglo y hago lo mismo
//asi hasta usar todos los numeros si no hay coincidencia retorne false
//si alguna suma es igual a requiredSum retorna un true

let arrOfNums = [1, 8, 6, 3, 5, 12, 2, 14, 4, 16];
let requiredSum = 18;

function findSum(arr, requiredNum) {
  for (let i = 0; i < arr.length; i++) {
    let arrAux = [...arr];
    let numBase = arr[i];
    arrAux.splice(i, 1);
    if (checkSum(arrAux, numBase, requiredNum)) {
      return true;
    }
  }
  return false;
}

function checkSum(arreglo, num, num2) {
  for (let i = 0; i < arreglo.length; i++) {
    if (num + arreglo[i] === num2) {
      return true;
    }
  }
  return false;
}

findSum(arrOfNums, requiredSum);

// nums = arreglo de numeros, requiredSum = numero
//primero recibo el arrelo nums y lo ordeno de mayor a menor
// agarro el primer numero del arreglo y el ultimo y los sumo
//si el resultado es mayor a requiredSum cambio el ultimo numero por el anterior
//vuelvo a sumarlos, si el resultado es menor a requiredSum cambio el primer numero por el siguiente
//si en algun momento coincide la suma con requiredSum retorno true
//sino retorno false

let arrOfNums2 = [1, 8, 6, 3, 5, 12, 2, 14, 4, 16];
let requiredSum2 = 18;

function findSum2(arr, requiredNum) {
  let arrAux = [...arr].sort((a, b) => a - b);

  function checkSum2(start, end) {
    if (start >= end) {
      return false;
    }
    let sum = arrAux[start] + arrAux[end];
    if (sum === requiredNum) {
      return true;
    } else if (sum < requiredNum) {
      return checkSum2(start + 1, end);
    } else if (sum > requiredNum) {
      return checkSum2(start, end - 1);
    }
  }
  return checkSum2(0, arr.length - 1);
}
findSum2(arrOfNums2, requiredSum2);
