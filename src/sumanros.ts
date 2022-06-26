let dato1 = document.getElementById("dato1");
let dato2 = document.getElementById("dato2");
let rotulo1 = document.getElementById("rotulo1");
let rotulo2 = document.getElementById("rotulo2");
let btnEnviar = document.getElementById("Enviar");

rotulo1.innerHTML = "Ingrese el Primer Número: ";
rotulo2.innerHTML = "Ingrese el Segundo Número: ";

btnEnviar.addEventListener("click", () => {
  let primerNum: number = Number(dato1.value);
  let segundoNum: number = Number(dato2.value);
  let actual, suma, aux: number;
  actual = primerNum;
  if (primerNum > segundoNum) {
    aux = primerNum;
    primerNum = segundoNum;
    segundoNum = aux;
  }
  suma = 0;

  for (let actual: number = primerNum; actual <= segundoNum; actual++) {
    suma = suma + actual; // suma+=actual;
  }
  console.log("El resultado de la suma es: ", suma);
});
