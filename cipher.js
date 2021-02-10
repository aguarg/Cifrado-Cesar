/*Caesar's cipher*/
/*Un Caesar's cipher, desplazando los valore 2 lugares hacia adelante*/

/*PROBLEMAS:

*/

const abecedario = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", 
"m", "n", "ñ", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "á", 
"é", "í", "ó", "ú"];

//Es para probar. Luego "palabra" recibe strings desde un input.
let palabra = "Esto será el texto Cifrado";
palabra = palabra.toLowerCase();

let textoCifrado = "";

let letraCifrada = "";


/*Itera una cantidad de veces igual a los carcateres de la variable palabra:*/
for (let i = 0; i < palabra.length; i++) {
	//... si encuentra un espacio, lo agrega al texto que se está cifrando:
	if (palabra[i] === " ") {
		textoCifrado += letraCifrada + " ";
	}

	/*Cifrado para el último elemento del arreglo: se le reasigna el índice 1, es decir,
	se movió en el arreglo 2 lugares hacia la derecha y salió por la izquierda.*/
	/*indexOf devuelve el índice del elemento dentro del arreglo, que sea igual a 
	lo que le pongamos entre (), en este caso, la letra [i] en "palabra"*/	
	else if (abecedario.indexOf(palabra[i]) === (abecedario.length - 1)) {
		let letraCifrada = abecedario[1];
		textoCifrado += letraCifrada;	
		
	}	

	//Cifrado para el anteúltimo elemento del arreglo: se le reasigna el índice 1.
	else if (abecedario.indexOf(palabra[i]) === (abecedario.length - 2)) {
		let letraCifrada = abecedario[0];
		textoCifrado += letraCifrada;
	}
	
	/*Cifrado para el resto de las letras de la variable "palabra": cambia el 
	índice original de esa letra en el arreglo abecedario por el mismo + 2 y
	devuelve esa letra del mismo arreglo*/ 
	else {
		let indiceLetra = abecedario.indexOf(palabra[i]);

		let letraCifrada = abecedario[indiceLetra + 2];

		textoCifrado += letraCifrada;
	}
		
}

console.log(textoCifrado);


//acá estoy probando cosas nuevas:	
