/*Caesar's cipher*/
/*Un Caesar's cipher, desplazando los valore 2 lugares hacia adelante*/

/*PROBLEMAS:
- ¿Como obtener los índices de los valores "y" y "z"?
R1: hacer if o switch para los valores "y" y "z"
R2: mover el cifrado solo 1 a la derecha y solo tendría que hacer el caso para
la z
R3: reemplazar el for por un forEach y aplicar las reglas para y y z en esa misma funcion. 
R4: agregar 2 valores mas al array abecedario para que no termine antes

- No maneja los espacios. Junta todas las letras y reemplaza el " " por b.

*/

const abecedario = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "ñ", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

let palabra = "ala alba";

var textoCifrado = "";

/*Itera por cada letra de la variable "palabra"*/
for (let i = 0; i < palabra.length; i++) {
	
	/*indexOf devuelve el índice del elemento dentro del arreglo, que sea igual a 
	lo que le pongamos entre (), en este caso, la letra [i] en "palabra"*/	
	let indiceLetra = abecedario.indexOf(palabra[i]);

	/*A cada indiceLetra que esté iterando le suma 2 y usa ese valor como
	índice para acceder a la letra del arreglo abecedario, corrida 2 lugares*/
	let letraCifrada = abecedario[indiceLetra + 2];

	textoCifrado += letraCifrada;



	
}

console.log(textoCifrado);


//acá estoy probando cosas nuevas:	
