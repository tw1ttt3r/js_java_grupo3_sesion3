// Funciones
// Herramientas que encapsulan código el cual puede ser invocado y ejecutado apartir
// del nombre con el cual declaramos la función

// sintaxis: function nombrefuncion() {}

// ejemplo:
// crear una funcion que imprima un saludo

function imprimeSaludo() {
  console.log("Hola mundo");
}

// return
// nos permite regresar algo al termino de la función
// es la última línea que se ejecuta de una función
// sintaxis: function nombrefuncion() {
  // ... 
  // return expresion, variable, dato, callback, function 
// }

// ejemplo:
// crear una funcion que nos regrese el resultado de una suma

function suma() {
  return 4 + 4
}

// crear una funcion que nos regrese un saludo
function saludo() {
  return "Hola desde la función"
}

// validar que nos regresa un return vacio
// nos regresa un undefined
function returnVacio() {
  return
}

// guardar el valor de un return de una funcion, mientras la funcion  regrese valores
const resultadoSuma = suma();

console.log("resultado: ", resultadoSuma);

// Parametros
// son valores que reciben datos en la función para ser operados
// se reciben en el orden en que fueron declarados

// ejemplo
// crear una funcion que sume dos valores
function sumaValores(valor1, valor2) {
  return valor1 + valor2
}

// sumaValores 5 6 = 11
sumaValores(5, 6)



// Ejercicio
function operaciones(operacion, num1 = 6, num2) {
  switch(operacion) {
    case "suma":
      return num1 + num2
      break;
    case "resta":
      return num1 - num2
      break;
    case "multiplicacion":
      return num1 * num2
      break;
    case "division":
      return num1 / num2
      break;
    default:
      return "Operación no reconocida"
  }
}

// parametros por default
// son parametros que al momento de ser declarados tienen un valor
// este valor se usuará solo en el caso de que al momento de invocar la funcion
// no ser envie todos los parametros

// sintaxis: function nombredefuncion(parametro1 = valoraasingar, parametro2) {
  // return valor1 + valor2
// }

// ejemplo
// crear una funcion que reciba el nombre del usuario y lo salude

function saludaUsuario(nombre = "usuario") {
  return "buen día " + nombre; 
}

// reglas 
// cuando sean más de un parametro, los parametros por defecto deben
// deben ir al final de la lista de parametros
// si se desea ocupar un parametro por defecto en medio o principio de la lista
// se debe enviar undefined como valor en el espacio de ese parametro

// parametros REST
// parametros que se declaran de una manera especial
// los parametros rest reciben un número no definido de valores

// sintaxis: function nombredelafuncion(...parametros) {}

// ejemplo:
// crear una funcion que reciba los datos del nombre de un usuario y que los imprima
// en pantalla

function nombreUsuario(...usuario) {
  console.log(usuario);
}


// Ejercicio:

function descuento(descuento, precio) {
  return precio - (precio * descuento);
}

function valorDescuento(codigo) {
  switch(codigo) {
    case "a":
      return .45;
      break;
    case "b":
      return .60;
      break;
    case "c":
      return .30;
      break;
  }
}

function preguntaDescuento() {
  const respuesta = prompt("Codigo de descuento: ");
  return respuesta
}

function infoDescuento(porcentaje, precio) {
  console.log("Porcentaje de descuento: ", porcentaje * 100 + "%");
  const totDescuento = descuento(porcentaje, precio);
  console.log("Precio con descuento: $" + totDescuento);
}

let next = '';
do {
  const respuesta = prompt(`Bienvenido, estos son nuestros destinos:
    Guadalajara
    CDMX
    Monterrey
    Saltillo
    Yucatan
    
    A que destino desea viajar: `);

  const descuentoValor = preguntaDescuento();
  
  switch(respuesta.toLowerCase()) {
    case "Guadalajara".toLowerCase():
      console.group();
      console.log("Destino: ", respuesta);
      console.log("Precio original: $600.00");
      if (!!descuentoValor) {
        const desc = valorDescuento(descuentoValor);
        infoDescuento(desc, 600);
      }
      console.groupEnd();
      break;
    case "CDMX".toLowerCase():
      console.group()
      console.log("Destino: ", respuesta);
      console.log("Precio original: $300.00");
      if (!!descuentoValor) {
        const desc = valorDescuento(descuentoValor)
        infoDescuento(desc, 300);
      }
      console.groupEnd();
      break;
    case "Monterrey".toLowerCase():
      console.group();
      console.log("Destino: ", respuesta);
      console.log("Precio original: $800.00");
      if (!!descuentoValor) {
        const desc = valorDescuento(descuentoValor)
        infoDescuento(desc, 800);
      }
      console.groupEnd();
      break;
    case "Saltillo".toLowerCase():
      console.group();
      console.log("Destino: ", respuesta);
      console.log("Precio original: $500.00");
      if (!!descuentoValor) {
        const desc = valorDescuento(descuentoValor)
        infoDescuento(desc, 500);
      }
      console.groupEnd();
      break;
    case "Yucatan".toLowerCase():
      console.group();
      console.log("Destino: ", respuesta);
      console.log("Precio original: $900.00");
      if (!!descuentoValor) {
        const desc = valorDescuento(descuentoValor)
        infoDescuento(desc, 900);
      }
      console.groupEnd();
      break;
    default:
      console.warn("Lo sentimos, este destino aún no lo tenemos");
  }

  next = prompt("Desea revisar un nuevo destino: s/n");
} while(next.toLowerCase() == 's');