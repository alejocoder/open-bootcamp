var numero = 10;
var resultado = numero;
var i = 1;

while (i < numero) {

    if (numero <= 0 ) {
        break
    }
    resultado = resultado * i;
    i++   
}

console.log(resultado)
