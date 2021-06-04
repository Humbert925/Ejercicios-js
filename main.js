//alert('Hola mundo');
/*
var nombre = 'Humberto';
var apellidos = 'Morales Uberetagoyena';
var edad = 26;

console.log(nombre, apellidos);
console.log(nombre + ' ' + apellidos);
console.log('Mi edad es:' + ' ' + edad);

var numero = 10;
var otroNumero = '11';

console.log(typeof(numero)); 
console.log(typeof(otroNumero));*/


//se calcula el area de un triangulo

/*
var base = parseInt(prompt('Escribe la base del triangulo'));
var altura = parseInt(prompt('Escribe la altura del triangulo'));
var resultado = (base * altura)/2; 

alert('El área del triangulo es: ' + resultado); 

*/
//Actividad 1: Operaciones aritméticas.
/*Hacer un código que le pida al usuario 2 números a través del prompt, 
estos números los vamos a Sumar, restar multiplicar y dividir. Al final mostrar el resultado.
*/
/*
var x = parseInt (prompt('digita el primer número'));
var y = parseInt (prompt('digita el segundo número'));

var suma = (x + y);
alert ('el resultado de la suma es:' + suma); 
var resta = (x- y); 
alert ('el resultado de la resta es:' + resta); 
var div = (x / y); 
alert ('el resultado de la division es:' + div); 
var mult = (x * y); 
alert ('el resultado de la multiplicacion es:' + mult); 

console.log (x);
console.log (y); 

console.log('El resultado de la suma es:' + suma);
console.log('El resultado de la resta es' + resta);
console.log('El resultado de la division es' + div);
console.log('El resultado de la multiplicación es:' + mult);
*/

//Actividad 2:condicionales. 
/*Hacer un programa en javascript en donde se le pregunte la edad al usuario y 
si el usuario tiene 18 años o mas y menos de 29 años, le impriman por consola que ha sido aceptado 
en el programa de generation, en caso de no ser así mostrar un mensaje indicando que no cumple 
los requisitos del programa*/
 

//basado en clase (opción 1)
/*s
var usuario = prompt('¿Cuál es tu nombre completo?');
var edad = prompt('¿Cuál es tu edad?');

const admision=18;
if (edad >=18 && edad <=29) {
    console.log ("Actptado, sigue el proceso de reclutamiento");}
else{console.log ("Lo sentimos, por favor contacta a nuestro equipo")}; */

//basado en apoyo (opción 2)
/*
console.log (nombre);
console.log(nombre )
console.log("Edad" + edad)

var edad = 1; 
var edad = parseInt(prompt("confirma tu edad"));

if (edad>= 18 && edad <=29) ("felicidades puedes seguir tu proceso")
else {console.log ("por favor ponte en contacto con nuestro equipo");} 
*/

// Actividad 3: Calcular salario
/*Calcular el salario bruto y neto mensual y quincenal de una persona, 
el salario diario debe ser ingresado por el usuario a traves de promt, 
los descuentos para calcular el sueldo netos serán sueldo bruto - ISR(30%)  - IMSS(10%)
*/
/*
var salariomensual = parseInt(prompt('¿cuál es tu salario mensual?'));
var salarioextra = parseInt(prompt('¿cuántas horas extra trabajaste?'));
var salarioextra = (salariomensual/30) * (salarioextra)
var salarioquin = (salariomensual/2);
var salariobrutomens = (salariomensual) + (salarioextra); 
var salariobrutoquin = ((salarioquin) + salarioextra);
var salarionetomens = (salariobrutomens) - (salariobrutomens * 0.3 ) - (salariobrutomens * 0.1);
var salarionetoquin = (salariobrutoquin) - (salariobrutoquin * 0.3) - (salariobrutoquin * 0.1);

console.log('salario bruto mensual'+' ' + salariobrutomens);
console.log('salario neto mensual'+ ' ' + salarionetomens );
console.log('salario bruto quincenal'+' '+ salariobrutoquin);
console.log('salario neto quincenal'+ ' ' + salarionetoquin);
*/

//Ejercicios viernes (28may21)
//Ejercicio suma de 2 números definidos. 
/*
function suma(num1, num2) {
    return num1 + num2;
}
console.log (suma(9,2));
*/
//Ejercicio 12 meses del año, crear un ciclo donde se imprima el arreglo de los meses
/*
var meses = [
    'enero',
    'febrero', 
    'marzo',
    'abril',
    'mayo',
    'junio',
    'julio',
    'agosto',
    'septiembre', 
    'octubre',
    'noviembre',
    'diciembre'
];

for(i = 0; i < meses.length; i++) {
    console.log(meses [i]);
}*/

/*me di cuenta que no hay diferencia entre usar comilla simple '' o
 doble comilla "" al momento de nombrar una variable. 
Sin embargo, si combinas el uso de comillas, se genera un error:
 Uncaught SyntaxError: Invalid or unexpected token
Además dentro del programa Visual Studio Code se coloca la pestaña en rojo, señalando un error*/

// Ejercicios de Objetos (31may21)
/*Crear un objeto que se llame persona, el ejemplo debe tener 
un nombre, sus apellidos, edad y debe tener un método para saludar. Otro método donde diga su edad.
En consola imprimir el resultado de ambos métodos*/
/*
var persona = {
    nombre: 'Armando',
    apellido: 'Paredes :v ', 
    edad: 62,
};

console.log (persona); 
*/
/*ya corre, pero no entendí cómo definí el objeto xD*/

/*Hacer una función donde le pasemos los parametros (nombre, apellidos, edad,)
 * esta funcion tendrá dentro un objeto
 * los datos que reciba la función llenarán el objeto.
 * La función debe retornar el objeto.
 */
var persona= {
    nombre: type="text",
    apellido: type= "text", 
}


/*
<form>
<fieldset>
    <label for ="nombre y apellidos"> Por favor, escriba su nombre: </label>
    <input type="text" id="nombre"/>
    <button type= "button">Enviar</button>
    <label for ="edad">Por favor, escriba su edad: </label>
    <input type="num"age="edad"/>
    <button type= "button">send</button>
</fieldset>
</form>*/