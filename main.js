

function ocultar(elemento){
    //var elemento = document.querySelector('#info');
    elemento.setAttribute('hidden', true);
    
}
//setTimeout(ocultar, 10000)

function ocultarInfo(){
    var elemento = document.querySelector('.card');
    elemento.setAttribute('hidden', true);
    
}

function showpopup(){
    var elemento = document.querySelector('.popup');
    elemento.removeAttribute('hidden');
   // elemento.setAttribute('hidden', false);
}

function showInfo(){
    var elemento = document.querySelector('#info');
    elemento.setAttribute('hidden', false);
    
}

var cards = document.querySelectorAll('.card');

cards.forEach(function(btn){
    btn.addEventListener('click', function(){
       // ocultar(btn);
       showpopup();
    })
});

//btn.addEventListener('click',showInfo );

//primera forma de declarar una funcion
function test(){

}

//segunda forma de declarar una funcion
var test2 = function(){}

test2();
//segunda forma de declarar una funcion
var test3 = function funcionconnombre(){}

test3();

//tercera forma de declarar un metodo
var test4=() =>{} 
//la diferencia entre las ultimas dos es 


var persona = {
    edad : 10,
    nombre : "Javier",
    estadocivil : "Soltero",
    titulos : {
        uno : "universitario"
    },
};
const {nombre, edad, estadocivil, titulos:{uno}}= persona;

console.log(`Hola, soy ${nombre}, tengo ${edad} años`);

function par(){
    var a = Math.random()*100;
    var b = Math.random()*100;

    return{
        a,b
    }
/*
    return{
        a: a,
        b: b
    }*/
}

var {a,b} = par();

console.log(a, b);

function pare(){
    var a = Math.random()*100;
    var b = Math.random()*100;

    return[a,b,'hola']
    
/*
    return{
        a: a,
        b: b
    }*/
}

var [dd,b, mss] = pare();

console.log(b, dd, mss);


//var personas =[];
var personas =[{
    nombre: "ebriana",
    edad : 19,
    estadocivil : "casada"
}];


personas.push({
    nombre: "javier",
    edad: 10,
    estadocivil : "union libre"
});


personas.push({
    nombre: "jorge",
    edad: 45,
    estadocivil : "union libre"
});

let pers = {  nombre: "caballo",
edad: 15,
estadocivil: "Soltero"}

personas.push(pers);
console.log(personas);

/*
var copia = personas.map((pers, index) => {
    return ` Hola, Soy ${nombre}`
})
*/

var copia = personas.map(( {nombre, edad, estadocivil}, index) => {
    return ` Hola, Soy ${nombre}, tengo ${edad} años y soy ${estadocivil}`
});

console.log(copia);


var res = personas.some(({edad})=>{
    console.log(edad);
    if(edad === 10){
        return true;
    }
});

console.log(res);

var numeros = [10, 10, 11];

//para realizar una operacion numerica de  un arreglos
var total = numeros.reduce((total, num)=>{
    return total+num;
}, 0);
console.log(total);

var solteros = personas.reduce((solteros, {estadocivil}) =>{
    if(estadocivil ==="Soltero"){
     solteros++;
    }
    return solteros;
},0
);

console.log(solteros);

var agrupaciones = personas.reduce((estados, {estadocivil}) =>{
if(estados[estadocivil]){
    estados[estadocivil]++;
}else{
    estados[estadocivil] = 1;
}
return estados;
}, {});

console.log(agrupaciones);

/*
var mayoresdeEdad = personas.filter(({edad})=>{
//if(edad >=18)
return (edad >=18);
});*/

var mayoresdeEdad = personas.filter(({edad})=>edad>=18);

console.log(mayoresdeEdad);

console.log(personas);
/*
personas.sort(({edad: edadA}, {edad : edadB})=> {
if(edadA> edadB)
return-1;

if(edadA> edadB)
return 1;

if(edadA === edadB)
return 0;

});*/
personas.sort(({edad: edadA}, {edad : edadB})=> edadA -edadB );

console.log(personas);

var existen = personas.every(({edad})=> edad >= 0 );

console.log(existen);

var perso = personas.find(({nombre})=>{
    if(nombre ==='caballo') return true
});
console.log(perso);
/////////////////////////
/*

//personas.reverse();

console.log(personas);

//devuelve una copia de la informacion, desde 0 hasta 2, donde 2 no es inclusivo, osea, traera 0 y 1
var copia = personas.slice(0,2);
console.log(copia);

var copia2 = personas.slice(-2);
console.log(copia2);

//cambia el contenido de un arreglo
personas.splice(1, 1);
console.log(personas);


/*let pers = {  nombre: "duende",
edad: 15,
estadocivil: "Soltero"}*/

/////////////////////

//vaya al indice 1, no borre nada y ponga nuevo
personas.splice(1, 0, 'nuevo');
console.log(personas);

//vaya al indice 1, no borre nada y ponga huevo y otro
personas.splice(1, 0, 'huevo', 'otro');
console.log(personas);

/*
var jorge2 = {
    ...jorge,
nombre:"Claudia", nuevo: true
};
//jorge2.nombre = "Claudia";

console.log(jorge, jorge2);
*/

var personas2 =[...personas];
console.log(personas, personas2);

function nii(a, b, c){
    console.log(b);
}

nii(10, 20, 30);

nii(...personas);




