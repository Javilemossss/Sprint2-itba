// Def. var
let nombre= document.getElementById('nombre')
let gasto= document.getElementById('gasto')
let button = document.querySelector('button')
let monto = [];
let persona = [];

// Func.  Boton

button.onclick= function enviar() {

if (nombre.value.length && gasto.value.length > 0){
    let list= document.createElement('li');
     //combino persona y valor
    list.innerHTML = nombre.value + ' ' + '$' + gasto.value;
    //Mostrar entrada con persona y valor
    lista.appendChild(list);}

if(monto.length === 0 || persona.indexOf(nombre.value) === -1){
    //guardo el nombre de cada uno 
    persona.push(nombre.value)
    //guardo el valor de cada gasto
    monto.push(parseFloat(gasto.value))} else {
    //busco el nombre en la posición array
    let index = persona.indexOf(nombre.value) 
    //si lo encuentra, entonces lo sumo
    monto[index] += parseFloat(gasto.value)}
        
    let suma= 0 // Comenzar a sumar
    let division= 0 // para dividir cada monto

    for (let i = 0; i < monto.length; i++) { //monto total
        suma += parseFloat (monto [i])
        division = suma / monto.length}

    let total= document.getElementById('textototal'); //para mostrrar monto total 
    total.innerHTML = '$' + suma;
    totalmostra.appendChild(total)
    
    let promedio= document.getElementById('textocadauno')
    promedio.innerHTML= '$' +  division
    cadauno.appendChild(promedio)

    nombre.value = '';
    gasto.value = '';
}