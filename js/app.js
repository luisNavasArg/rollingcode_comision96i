let preguntas= [
    {
      question: "Tiene el conocimiento y la experiencia necesaria para crear aplicaciones webs utilizando un stack de tecnologías.",
      choices: [
        "Developer Full Stack",
        "Developer Backend",
        "Developer Front End",
        "Developer Junior"
      ],
      answer: "Developer Full Stack"
    },
    {
      question: "Es la parte con la que interactua el cliente, es decir es la parte visual que utilizaran los usuarios y sus interacciones.",
      choices: ["Front End", "Backend"],
      answer: "Front End"
    },
    {
      question: "HyperText Markup Language: Define el significado y la estructura del contenido web",
      choices: ["Verdadero", "Falso"],
      answer: "Verdadero"
    },
    {
      question: "Se utiliza para controlar el estilo y el diseño de las páginas web",
      choices: ["HTML", "JAVASCRIPT", "CSS", "Node"],
      answer: "CSS"
    },
    {
      question: "Lenguaje interpretado que se encargara de darle la funcionalidad a la página web",
      choices: ["HTML", "JAVASCRIPT", "CSS", "Node"],
      answer: "JAVASCRIPT"
    },
    {
      question: "Son herramientas que nos ayuda a optimizar el trabajo. Un marco de trabajo que nos brinda recursos para facilitarnos la creación de nuestra pagina",
      choices: ["FRAMEWORK", "HTML", "JAVASCRIPT", "CSS"],
      answer: "FRAMEWORK"
    },
    {
      question: "Es la parte que interactua con el servidor, hace de intermediario entre el front end y el servidor de base de datos.",
      choices: ["Front End", "Backend"],
      answer: "Backend"
    },
    {
      question: "Es un motor de ejecución de JavaScript que nos permite utilizar el lenguaje de programación javaScript en el backend",
      choices: ["Node", "Javascript", "CSS", "HTML"],
      answer: "Node"
    },
    {
      question: "¿Cuál es la diferencia principal entre un bucle for y un bucle while en JavaScript?",
      choices: [
       " a )El bucle for se utiliza para un número desconocido de iteraciones",
        " b ) El bucle while se utiliza cuando el número de iteraciones es conocido de antemano",
        " c ) Ambos bucles tienen la misma funcionalidad"
      ],
      answer: " b ) El bucle while se utiliza cuando el número de iteraciones es conocido de antemano"
    },
    {
      question: "¿Qué tipo de bucle se utiliza cuando el número de iteraciones es conocido de antemano?",
      choices: ["for", "while", "do while"],
      answer: "for"
    },
    {
      question: "Cómo se denomina la declaración utilizada para salir de un bucle antes de que se complete normalmente?",
      choices: ["continue", "exit", "break"],
      answer: "break"
    },
    {
      question: "¿Qué método se utiliza para crear un nuevo array aplicando una función a cada elemento del array original?",
      choices: ["concat", "map", "filter"],
      answer: "map"
    },
    {
      question: "¿Cuál es el método que invierte el orden de los elementos en un array?",
      choices: ["reverse", "flip", "invert"],
      answer: "reverse"
    },
    {
      question: "¿Qué método se utiliza para convertir un string a mayúsculas?",
      choices: ["toUpperCase", "upper", "capitalize"],
      answer: "toUpperCase"
    },
    {
      question: "¿Cuál es el método que retorna la posición de la primera ocurrencia de una subcadena en un string?",
      choices: ["locate", "find", "indexOf"],
      answer: "indexOf"
    }
  ]
  let pregunta_numero=0;
  function mezclar(array) {
    let  n = array.length-1;
    for (let i = n; i > 1; i--) {
        let aleatorio = Math.floor(i*Math.random());
        let temp = array[i];
        array[i]=array[aleatorio];
        array[aleatorio]=temp;
    }
    return array
  }

  preguntas =mezclar(preguntas);
 window.onload=function () {
    document.body.innerHTML=`
    <div class="container">
        <div class="row">
            <div class="col-6">
                <h2 class="text-center bg-info bg-opacity-25">Pregunta</h2>
                <p id="question"></p>
            </div>
            <div class="col-6">
                <h2 class="text-center bg-danger bg-opacity-25">Opciones</h2>
                <ul id="choices"></ul>
                <button onclick="siguiente()" class="btn btn-success" id="next">Siguiente</button>
            </div>
        </div>
    </div>
    `;
    mostrarPregunta(pregunta_numero)
 }
 function mostrarPregunta(index) {
    let question = document.querySelector("#question");
    let choices = document.querySelector("#choices");
    question.innerText=`${preguntas[index].question}`;
    choices.innerHTML="";
    preguntas[index].choices.forEach(function (choice,index) {
        choices.innerHTML+=`
        <li>
        <input id='${index}' type="radio" name="answer" value='${choice}'/>
            <label for='${index}'>
                ${choice}
            </label>
        </li>
        `
    })
 }
 function siguiente(){
    let question = document.querySelector("#question");
    let choices = document.querySelector("#choices");
    console.log(question.innerHTML);
    console.log(choices.children);
    

    pregunta_numero++;
   
    if (pregunta_numero < preguntas.length) {
        mostrarPregunta(pregunta_numero)
    }else{
        alert("Terminaste la prueba");
        //mostrarResultados  modal
    }
    
 }
 

 