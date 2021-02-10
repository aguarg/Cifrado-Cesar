/*Caesar's cipher*/
/*Un Caesar's cipher, desplazando los valore 2 lugares hacia adelante*/

/*PROBLEMAS/HACER:


*/

const abecedario = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", 
"m", "n", "ñ", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "á", 
"é", "í", "ó", "ú"];

//Es para probar. Luego "textoACifrar" recibe strings desde un input.
let textoACifrar = "Hola como estás";

let textoCifrado = "";

let letraCifrada = "";


/*CIFRAR TEXTO*/
function cifrar(textoACifrar){
	textoACifrar = textoACifrar.toLowerCase();

	for (let i = 0; i < textoACifrar.length; i++) {
		//... si encuentra un espacio, lo agrega al texto que se está cifrando:
		if (textoACifrar[i] === " ") {
			textoCifrado += letraCifrada + " ";
		}

		/*Cifrado para el último elemento del arreglo: se le reasigna el índice 1, es decir,
		se movió en el arreglo 2 lugares hacia la derecha y "salió por la izquierda" del arreglo.*/
		/*El método indexOf() devuelve el índice del elemento dentro del arreglo, que sea igual a 
		lo que le pongamos entre (), en este caso, la letra [i] en "textoACifrar"*/	
		else if (abecedario.indexOf(textoACifrar[i]) === (abecedario.length - 1)) {
			let letraCifrada = abecedario[1];
			textoCifrado += letraCifrada;	
			
		}	

		//Cifrado para el anteúltimo elemento del arreglo: se le reasigna el índice 0.
		else if (abecedario.indexOf(textoACifrar[i]) === (abecedario.length - 2)) {
			let letraCifrada = abecedario[0];
			textoCifrado += letraCifrada;
		}
		
		/*Cifrado para el resto de las letras del string de la variable "textoACifrar": 
		cambia el índice original de esa letra en el arreglo abecedario por el mismo + 2 y
		devuelve esa letra del mismo arreglo*/ 
		else {
			let indiceLetra = abecedario.indexOf(textoACifrar[i]);

			let letraCifrada = abecedario[indiceLetra + 2];

			textoCifrado += letraCifrada;
		}
		
}


	//Cuando haga el sitio, cambiar el console.log por una caja que muestre el texto cifrado o un <p> común.
	console.log(textoCifrado);
}

cifrar(textoACifrar);




/*DESCIFRAR TEXTO ==========================================================*/
let textoADescifrar = "jqnc eqñq guvíu";

let textoDescifrado = "";

let letraDescifrada = "";


function descifrar(textoADescifrar){
	
	for (let i = 0; i < textoADescifrar.length; i++) {
		//... si encuentra un espacio, lo agrega al texto que se está cifrando:
		if (textoADescifrar[i] === " ") {
			textoDescifrado += letraDescifrada + " ";
		}

		/*Descifrado para el último elemento del arreglo:*/
		else if (abecedario.indexOf(textoADescifrar[i]) === 1) {
			let letraDescifrada = abecedario[(abecedario.length - 1)];
			textoDescifrado += letraDescifrada;	
			
		}	

		//Descifrado para el anteúltimo elemento del arreglo: 
		else if (abecedario.indexOf(textoADescifrar[i]) === (0)) {
			let letraDescifrada = abecedario[abecedario.length - 2];
			textoDescifrado += letraDescifrada;
		}
		
		/*Descifrado para el resto de las letras del string de la variable "textoACifrar": 
		cambia el índice original de esa letra en el arreglo abecedario por el mismo - 2 y
		devuelve esa letra del mismo arreglo*/ 
		else {
			let indiceLetra = abecedario.indexOf(textoADescifrar[i]);

			let letraDescifrada = abecedario[indiceLetra - 2];

			textoDescifrado += letraDescifrada;
		}
		
}


	//Cuando haga el sitio, cambiar el console.log por una caja que muestre el texto descifrado o un <p> común.
	console.log(textoDescifrado);
}

descifrar(textoADescifrar);