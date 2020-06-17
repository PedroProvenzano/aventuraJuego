var vidas = 2;
var nombreUsuario;
var terminoJuego;
var numeroUno;
var numeroDos;
var resultadoTotal;
var respuestaUser;
const regex = / /gi;                                                                            

// Funciones Utilitarias

// Numeros Aleatorios
function numeroAleatorio(desde, hasta) {
    return Math.max(desde, parseInt(Math.random() * (hasta + 1)));
}

// Mayuscula
function mayus(letra){
    if(typeof letra !== 'string'){
        return ''
    }else{
        return letra.charAt(0).toUpperCase() + letra.slice(1)
    }
}

// Introduccion



function empezarJuego(){
    if (terminoJuego){
        return;
    }
    vidas = 2;   
    nombreDeUsuario();
    while(nombreUsuario==null){
        nombreDeUsuario();
    }
    nombreUsuario = nombreUsuario.replace(regex,"");                                               
    if((nombreUsuario == '')){
        alert("Porfavor, agrega un nombre");
        empezarJuego();
        return;
    }
    nombreUsuario = mayus(nombreUsuario);
    alert("Un gigante de 3 cabezas se acerca lentamente hacia tí..");
    alert("Bienvenido " + nombreUsuario + ", en esta aventura vas a tener que enfrentarte a mi");
    alert("Para esto vas a tener que resolver problemas matemáticos\n y vas a contar con 3 oportunidades");
    var listo = confirm("Estás listo?");
    if (listo){
        alert("La cabeza izquierda del gigante te mira fijamente ");
        primerProblema()
    }else{
        finPrograma();
    }
    
}

// Perdiste 
function perdiste(){
    alert("El juego terminó");
    var volverIntentarlo = confirm("Querés volver a intentarlo?");
    if(volverIntentarlo){
        vidas = 2;
        empezarJuego();
    }else{
        return terminoJuego = true;
    }
}

// Final del programa
function finPrograma(){
    alert("Gracias por haber jugado");
    var volverJugar = confirm("Querés volver a jugar?");
    if (volverJugar){
        vidas = 2;
        empezarJuego();
    }else{
       return terminoJuego = true;
    }   
}

// Perder vidas
function mensajesPerder(callback){
    switch (vidas) {
    case 2:
        alert("Te equivocaste!");
        alert("El gigante te mira enojado, te quedan " + vidas + " vidas");
        vidas = vidas - 1;
        callback();
    break;
    case 1:
        alert("No no no!");
        alert("El gigante te mira soltando una pequeña risa, te queda " + vidas + " vida");
        vidas = vidas - 1;
        callback();
    break;
    case 0:
        perdiste();
    break;    
}
}


// Primer Ejercicio SUMA 
function primerProblema(){
    numeroUno = numeroAleatorio(1, 100);
    numeroDos = numeroAleatorio(1, 100);
    resultadoTotal = numeroUno + numeroDos;

    problemaUnoPregunta();
    while(respuestaUser==null){
        problemaUnoPregunta();
    }
    if(respuestaUser == resultadoTotal){
        alert("Correcto!");
        alert("La cabeza izquierda del gigante se transforma lentamente en piedra");
        alert("La cabeza del medio te mira enojado");
        segundoProblema();
    }else{
        mensajesPerder(primerProblema);
    }
}


// Segundo Problema Multiplicacion
function segundoProblema(){
    numeroUno = numeroAleatorio(1, 100);
    numeroDos = numeroAleatorio(1, 100);
    resultadoTotal = numeroUno * numeroDos;
    problemaDosPregunta();
    while(respuestaUser==null){
        problemaDosPregunta();
    }
    if (respuestaUser == resultadoTotal){
        alert("Correcto!");
        alert("La cabeza se transforma lentamente en piedra");
        alert("La ultima cabeza del gigante te mira preocupado");
        tercerProblema();
    }else{
        mensajesPerder(segundoProblema);   
    }
}

// Tercer Problema Division
function tercerProblema(){
    numeroUno = numeroAleatorio(1, 100);
    numeroDos = numeroAleatorio(1, 100);
    resultadoTotal = Math.round(numeroUno / numeroDos);
    problemaTresPregunta();
    while(respuestaUser==null){
        problemaTresPregunta();
    }
    if (respuestaUser == resultadoTotal){
        alert("Correcto!");
        alert("El gigante se transforma completamente en piedra")
        alert("Ganaste!");
        finPrograma();
    }else{
        mensajesPerder(tercerProblema);  
    }
}


// Pruebas 2.0

// Evita cancelar problema al perder focus
function nombreDeUsuario(){
    nombreUsuario = prompt("Decime, cuál es tu nombre?");
    return;
}

function problemaUnoPregunta(){
    respuestaUser = prompt("Cuanto es " + numeroUno + " + " + numeroDos + " ?");
}

function problemaDosPregunta(){
    respuestaUser = prompt("Cuánto es " + numeroUno + " multiplicado por " + numeroDos + " ?");
}

function problemaTresPregunta(){
    respuestaUser = prompt("Cuanto es " + numeroUno + " divido por " + numeroDos + " ? \n(Redondeado)");
}





empezarJuego();
