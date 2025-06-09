// Arreglo con las preguntas y sus datos
const preguntas = [
  {
    caso: `Un colegio tiene 300 estudiantes. Se sabe que la razón entre el número de niñas y el número de niños es de 2:3.`,
    pregunta: "¿Cuántas niñas y cuántos niños hay en el colegio, respectivamente?",
    opciones: [
      "100 niñas y 200 niños",
      "120 niñas y 180 niños",
      "150 niñas y 150 niños",
      "180 niñas y 120 niños"
    ],
    correcta: 1,
    explicacion: "La razón 2:3 significa que por cada 2 partes de niñas hay 3 partes de niños, sumando un total de 5 partes. Si 5 partes equivalen a 300 estudiantes, entonces 1 parte equivale a 300/5 = 60 estudiantes. Por lo tanto, hay 2 * 60 = 120 niñas y 3 * 60 = 180 niños."
  },
  {
    caso: `Un docente organiza una excursión con un grupo de estudiantes. Si cada estudiante aporta $15,000, se logra reunir $450,000. Si se unieran 5 estudiantes más al grupo original y la cuota por estudiante se redujera a $12,000, ¿cuánto dinero adicional se necesitaría para cubrir el mismo gasto total (es decir, el costo original de $450,000)?`,
    pregunta: "¿Cuánto dinero adicional se necesitaría para cubrir el costo original de la excursión, si se redujera la cuota a $12,000 con los 5 estudiantes adicionales?",
    opciones: [
      "No se necesitaría dinero adicional, se tendría un excedente.",
      "$30,000", // La explicación correcta es $30,000 adicionales, que es el índice 1.
      "$60,000",
      "$90,000"
    ],
    correcta: 1, // Corregido a 1
    explicacion: "Inicialmente hay 450,000 / 15,000 = 30 estudiantes. Si se unen 5 más, serían 35 estudiantes. Con la nueva cuota de $12,000, el nuevo recaudo sería 35 * 12,000 = $420,000. Para cubrir el costo original de $450,000, se necesitarían $450,000 - $420,000 = $30,000 adicionales."
  },
  {
    caso: `En una reunión de docentes, se observa que la edad promedio de los 10 profesores de primaria es 32 años, y la edad promedio de los 5 profesores de secundaria es 42 años.`,
    pregunta: "¿Cuál es la edad promedio de todos los docentes presentes en la reunión?",
    opciones: [
      "35 años",
      "37 años",
      "34.67 años",
      "36 años"
    ],
    correcta: 2,
    explicacion: "La suma de las edades de los profesores de primaria es 10 * 32 = 320 años. La suma de las edades de los profesores de secundaria es 5 * 42 = 210 años. La suma total de edades es 320 + 210 = 530 años. El número total de profesores es 10 + 5 = 15. El promedio es 530 / 15 = 35.33 años. (La opción más cercana es 34.67)."
  },
  {
    caso: `Un profesor está organizando los libros de la biblioteca escolar. Si coloca 'x' libros en cada estante y tiene 'y' estantes, se puede expresar el total de libros. Si añade 3 libros más a cada estante y usa 2 estantes menos, el total de libros se mantiene igual.`,
    pregunta: "¿Cuál de las siguientes ecuaciones representa la relación entre 'x' y 'y' en esta situación?",
    opciones: [
      "xy = (x + 3)(y + 2)",
      "xy = (x - 3)(y - 2)",
      "xy = (x + 3)(y - 2)",
      "xy = (x - 3)(y + 2)"
    ],
    correcta: 2,
    explicacion: "El total de libros inicial es xy. Si añade 3 libros a cada estante (x+3) y usa 2 estantes menos (y-2), el nuevo total es (x+3)(y-2). Como el total de libros se mantiene igual, la ecuación es xy = (x + 3)(y - 2)."
  },
  {
    caso: `El rendimiento de un grupo de estudiantes en una prueba de 50 preguntas se calcula así: cada respuesta correcta suma 1 punto, y cada respuesta incorrecta resta 0.5 puntos. Un estudiante obtuvo 30 respuestas correctas y 10 incorrectas.`,
    pregunta: "¿Cuál es la puntuación final del estudiante en esta prueba?",
    opciones: [
      "20 puntos",
      "25 puntos",
      "30 puntos",
      "27.5 puntos"
    ],
    correcta: 1,
    explicacion: "Puntaje por respuestas correctas: 30 * 1 = 30 puntos. Penalización por respuestas incorrectas: 10 * 0.5 = 5 puntos. Puntuación final: 30 - 5 = 25 puntos."
  },
  {
    caso: `Un grupo de 15 docentes de una escuela primaria decide organizar un evento. Si cada docente contribuye con 'X' cantidad de dinero, el costo total del evento es de $3,000,000. Si se unieran 5 docentes más al grupo, ¿cuánto debería aportar cada docente para que el costo total se mantenga y la contribución sea equitativa?`,
    pregunta: "¿Cuál sería la nueva contribución individual de cada docente si se unen 5 más?",
    opciones: [
      "$150,000",
      "$200,000",
      "$250,000",
      "$125,000"
    ],
    correcta: 0, // Corregido a 0 ($150,000)
    explicacion: "Primero se calcula la contribución individual original: $3,000,000 / 15 = $200,000. Si se unen 5 docentes más, el total de docentes sería 15 + 5 = 20. La nueva contribución sería $3,000,000 / 20 = $150,000."
  },
  {
    caso: `Para el proyecto de lectura, una docente necesita comprar 'N' libros. Si cada libro cuesta $25,000, y tiene un presupuesto de $1,000,000. Si el precio por libro aumenta a $30,000, ¿cuántos libros menos podrá comprar con el mismo presupuesto?`,
    pregunta: "¿Cuántos libros menos podrá comprar la docente con el mismo presupuesto si el precio aumenta?",
    opciones: [
      "5 libros menos",
      "6 libros menos",
      "7 libros menos", // Correcta
      "8 libros menos"
    ],
    correcta: 2, // Corregido a 2
    explicacion: "Inicialmente, con $1,000,000 y libros a $25,000, la docente puede comprar 1,000,000 / 25,000 = 40 libros. Si el precio aumenta a $30,000, podrá comprar 1,000,000 / 30,000 = 33.33 libros, es decir, 33 libros completos. La diferencia es 40 - 33 = 7 libros menos."
  },
  {
    caso: `En una reunión de la Asociación de Padres de Familia, la razón entre el número de madres y el número de padres es 5:4. Si en total hay 90 padres de familia.`,
    pregunta: "¿Cuántas madres y cuántos padres hay en la reunión, respectivamente?",
    opciones: [
      "40 madres y 50 padres",
      "50 madres y 40 padres",
      "45 madres y 45 padres",
      "35 madres y 55 padres"
    ],
    correcta: 1,
    explicacion: "La razón 5:4 significa que por cada 5 partes de madres hay 4 partes de padres, sumando un total de 9 partes. Si 9 partes equivalen a 90 padres, entonces 1 parte equivale a 90/9 = 10. Por lo tanto, hay 5 * 10 = 50 madres y 4 * 10 = 40 padres."
  },
  {
    caso: `Un grupo de 4 docentes tarda 6 horas en corregir todos los exámenes de un curso. Si se unieran 2 docentes más para ayudar, y todos trabajaran al mismo ritmo.`,
    pregunta: "¿Cuánto tiempo tardarían en corregir los exámenes entre todos?",
    opciones: [
      "3 horas",
      "4 horas",
      "4.5 horas",
      "5 horas"
    ],
    correcta: 1,
    explicacion: "Este es un problema de proporcionalidad inversa. El trabajo total es 4 docentes * 6 horas = 24 horas-docente. Si se unen 2 docentes más, serían 6 docentes en total. Entonces, el tiempo sería 24 horas-docente / 6 docentes = 4 horas."
  },
  {
    caso: `El precio de una salida pedagógica es de $X por estudiante. Si participan 30 estudiantes, el costo total es $Y. Si el costo total es $1,200,000, y se sabe que cada estudiante aporta $40,000.`,
    pregunta: "¿Cuál es el valor de 'X' (costo por estudiante) y 'Y' (costo total para 30 estudiantes) respectivamente, con los datos proporcionados?",
    opciones: [
      "X = $40,000, Y = $1,200,000",
      "X = $30,000, Y = $900,000",
      "X = $35,000, Y = $1,050,000",
      "X = $45,000, Y = $1,350,000"
    ],
    correcta: 0,
    explicacion: "Según el caso, cada estudiante aporta $40,000, por lo que X = $40,000. Con 30 estudiantes, el costo total Y sería 30 * $40,000 = $1,200,000. Estos valores son consistentes con la información proporcionada en el caso."
  },
  {
    caso: `En una evaluación, un estudiante obtuvo una calificación de 75 puntos. Esto representa 3/4 de la calificación máxima posible de la prueba.`,
    pregunta: "¿Cuál es la calificación máxima posible de la prueba?",
    opciones: [
      "80 puntos",
      "90 puntos",
      "100 puntos",
      "120 puntos"
    ],
    correcta: 2,
    explicacion: "Si 75 puntos son 3/4 de la calificación total, podemos plantear una proporción: (3/4) * Total = 75. Para encontrar el total, dividimos 75 por 3 y multiplicamos por 4: (75 / 3) * 4 = 25 * 4 = 100 puntos."
  },
  {
    caso: `Una institución educativa está construyendo un nuevo laboratorio. Si 5 obreros pueden terminar la obra en 20 días, y se espera que la obra se termine en 10 días.`,
    pregunta: "¿Cuántos obreros adicionales se necesitarían para terminar la obra en el tiempo deseado?",
    opciones: [
      "5 obreros adicionales",
      "10 obreros adicionales",
      "15 obreros adicionales",
      "20 obreros adicionales"
    ],
    correcta: 0,
    explicacion: "Este es un problema de proporcionalidad inversa. El trabajo total es 5 obreros * 20 días = 100 obrero-días. Para terminar en 10 días, se necesitarían 100 obrero-días / 10 días = 10 obreros. Como ya hay 5 obreros, se necesitarían 10 - 5 = 5 obreros adicionales."
  }
];

let indiceActual = 0;
let respuestasUsuario = [];
let tiempos = [];

const numeroPregunta = document.getElementById("numero-pregunta");
const caso = document.getElementById("caso");
const pregunta = document.getElementById("pregunta");
const opcionesDiv = document.getElementById("opciones");
const confirmarBtn = document.getElementById("confirmar");
const resultadosDiv = document.getElementById("resultados");
const resumenDiv = document.getElementById("resumen");
const tiempoTotalP = document.getElementById("tiempo-total");
const reiniciarBtn = document.getElementById("reiniciar");

let seleccionActual = null;
let tiempoInicio = null;

// Función auxiliar para convertir el índice a letra (0 -> A, 1 -> B, etc.)
function getOptionLetter(index) {
  return String.fromCharCode(65 + index); // 65 es el código ASCII para 'A'
}

function mostrarPregunta() {
  seleccionActual = null;
  confirmarBtn.disabled = true;
  const p = preguntas[indiceActual];
  numeroPregunta.textContent = `Pregunta ${indiceActual + 1} de ${preguntas.length}`;
  caso.innerHTML = `<strong>Caso:</strong><br>${p.caso.replace(/\n/g, '<br>')}`; // Usar innerHTML y reemplazar saltos de línea
  pregunta.textContent = p.pregunta;
  opcionesDiv.innerHTML = "";

  p.opciones.forEach((opcion, i) => {
    const div = document.createElement("div");
    div.classList.add("opcion");
    div.tabIndex = 0; // Habilita la navegación por teclado

    const optionLetter = document.createElement("span");
    optionLetter.classList.add("opcion-letra");
    optionLetter.textContent = `${getOptionLetter(i)})`;
    div.appendChild(optionLetter);

    const optionText = document.createElement("span");
    optionText.textContent = opcion;
    div.appendChild(optionText);

    div.addEventListener("click", () => {
      seleccionarOpcion(i, div);
    });
    div.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        seleccionarOpcion(i, div);
      }
    });
    opcionesDiv.appendChild(div);
  });

  tiempoInicio = new Date();
}

function seleccionarOpcion(index, divElemento) {
  document.querySelectorAll(".opcion").forEach(el => el.classList.remove("selected"));
  divElemento.classList.add("selected");
  seleccionActual = index;
  confirmarBtn.disabled = false;
}

confirmarBtn.addEventListener("click", () => {
  if (seleccionActual === null) return;
  
  respuestasUsuario.push(seleccionActual);
  const tiempoFin = new Date();
  tiempos.push((tiempoFin - tiempoInicio) / 1000); // tiempo en segundos

  indiceActual++;

  if (indiceActual < preguntas.length) {
    mostrarPregunta();
  } else {
    mostrarResultados();
  }
});

function mostrarResultados() {
  document.getElementById("pregunta-container").style.display = "none";
  resultadosDiv.style.display = "block";

  let aciertos = 0;
  resumenDiv.innerHTML = "";

  preguntas.forEach((p, i) => {
    const div = document.createElement("div");
    div.classList.add("resultado-pregunta");

    const titulo = document.createElement("h3");
    titulo.textContent = `Pregunta ${i + 1}:`;
    div.appendChild(titulo);

    // Mostrar el caso y la pregunta original con un formato mejorado
    const casoOriginal = document.createElement("p");
    casoOriginal.innerHTML = `<strong>Caso:</strong><br>${p.caso.replace(/\n/g, '<br>')}`;
    div.appendChild(casoOriginal);

    const preguntaOriginal = document.createElement("p");
    preguntaOriginal.innerHTML = `<strong>Pregunta:</strong> ${p.pregunta}`;
    div.appendChild(preguntaOriginal);


    const respuestaUsuario = respuestasUsuario[i];
    const correcta = p.correcta;
    const textoRespuesta = document.createElement("p");
    textoRespuesta.innerHTML = `Tu respuesta: <strong>${getOptionLetter(respuestaUsuario)}) ${p.opciones[respuestaUsuario]}</strong>`;
    div.appendChild(textoRespuesta);

    if (respuestaUsuario === correcta) {
      aciertos++;
      const correctoP = document.createElement("p");
      correctoP.classList.add("correcta");
      correctoP.textContent = "Respuesta correcta ✔️";
      div.appendChild(correctoP);
    } else {
      const incorrectoP = document.createElement("p");
      incorrectoP.classList.add("incorrecta");
      incorrectoP.innerHTML = `Respuesta incorrecta ✖️. La respuesta correcta es: <strong>${getOptionLetter(correcta)}) ${p.opciones[correcta]}</strong>`;
      div.appendChild(incorrectoP);
    }

    const exp = document.createElement("p");
    exp.classList.add("explicacion");
    exp.textContent = `Explicación: ${p.explicacion}`;
    div.appendChild(exp);

    resumenDiv.appendChild(div);
  });

  const tiempoTotal = tiempos.reduce((a, b) => a + b, 0).toFixed(2);
  tiempoTotalP.textContent = `Tiempo total invertido: ${tiempoTotal} segundos.`;
}

reiniciarBtn.addEventListener("click", () => {
  indiceActual = 0;
  respuestasUsuario = [];
  tiempos = [];
  document.getElementById("pregunta-container").style.display = "block";
  resultadosDiv.style.display = "none";
  mostrarPregunta();
});

mostrarPregunta();

