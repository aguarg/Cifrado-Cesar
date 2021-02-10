/*Caesar's cipher*/
/*Un Caesar's cipher, desplazando los valore 2 lugares hacia adelante*/

/*PROBLEMAS:
- No maneja los espacios. Reemplaza el " " por b.

*/

const abecedario = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "ñ", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//Es para probar. Luego "palabra" recibe strings desde un input.
let palabra = "aaa zzz yyy";

var textoCifrado = "";

/*Itera por cada letra de la variable "palabra"*/
for (let i = 0; i < palabra.length; i++) {
	
	//cifrado para el último elemento del arreglo: se le reasigna el índice 0:	
	if (abecedario.indexOf(palabra[i]) === (abecedario.length - 1)) {
		let letraCifrada = abecedario[0];
		textoCifrado += letraCifrada;	
		
	}	

	//cifrado para el anteúltimo elemento del arreglo: se le reasigna el índice 1.
	/*indexOf devuelve el índice del elemento dentro del arreglo, que sea igual a 
	lo que le pongamos entre (), en este caso, la letra [i] en "palabra"*/
	else if (abecedario.indexOf(palabra[i]) === (abecedario.length - 2)) {
		let letraCifrada = abecedario[1];
		textoCifrado += letraCifrada;
	}
	
	//cifrado para el resto de los elementos del arreglo:
	else {
		let indiceLetra = abecedario.indexOf(palabra[i]);

		let letraCifrada = abecedario[indiceLetra + 2];

		textoCifrado += letraCifrada;
	}
		
}

console.log(textoCifrado);


//acá estoy probando cosas nuevas:	
