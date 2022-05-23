// Encontrar el Número Máximo

let ingresos: boolean = false;
let num: number = Number(prompt("Ingrese un número"));
let maxNum: number = num;
while (num !== 0) {
  ingresos = true;
  if (num > maxNum) {
    maxNum = num;
}
num = Number(prompt("Ingrese un número"));
}
if(ingresos) {
  console.log("El máximo es", maxNum);
}
