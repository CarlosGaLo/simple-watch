function clock() {
  //Primero declaramos todas las variables que vamos a necesitar.
  //Recogemos en "date" el valor de la fecha actual. Esto se hace mediante una función integrada en JS llamada Date(); esta función devuelve la fecha. Si quieres ver lo que devuelve, descomenta la línea 5 y te aparecerá en consola.
  let date = new Date();
  //console.log(date);
  //Luego declaramos las variables que nos servirán para almacenar las horas, minutos, segundos y si es AM o PM.
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let session = "AM";

  //Como date nos devuelve el horario en formato 0-24 lo vamos a convertir a horario AM/FM. Eso lo hacemos mediante un simple if.
  //Si la hora es superior a 12, réstale 12 y cambiame AM a PM.
  if (hours > 12) {
    hours = hours - 12;
    session = "PM";
  }

  //Comprobamos si el número de horas es mayor o menor a 10. Si es menor, debemos añadirle un cero a la izquierda.
  /*
  if(hours<10) {
    hours = "0" + hours;
  }
  //Hay formas más simples de declarar un if. Si lo que quieres hacer se puede expresar en una línea se puede escribir como sigue. Vamos a hacer lo mismo que hemos hecho con la hora, pero con los minutos y los segundos. 
  if(minutes<10) minutes = "0" + minutes;
  if(seconds<10) seconds = "0" + seconds;
  */
  //Como puedes observar, al ser una única línea javaScript ya entiende que esa línea de código va con el if.

  //De la misma forma que se puede hacer usando if, se puede hacer usando una herramienta más profesional. Los ternarios.
  //¿Cómo se lee (parsea) un ternario?
  //La línea 22 se leería (parsearía) tal que así: "En la variable horas quiero que almacenes lo siguiente. Si horas es menor que 10, añádele el número 0 a la izquierda de lo que ya haya. Si la variable es mayor, déjala como está."
  //En este caso no es obligatorio usar ternarios, pero son herramientas útiles que conviene conocer.
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + hours : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  let time = hours + ":" + minutes + ":" + seconds + " " + session;

  setTimeout(clock, 1000);

  //Finalmente sustituimos el contenido del tag con la id "clock" para que nos muestre lo que hemos almacenado en la variable "time".
  document.getElementById("clock").innerText = time;
}

//Para que la función sirva, debemos llamarla.
clock();
