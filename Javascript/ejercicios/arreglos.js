let compra=["tomates", "pasta","aguacate","leche","pollo"];

compra.push("aceite de girasol");

console.log(compra);

compra.pop();

console.log(compra);

let peliculas = [
    {titulo: "avatar", director: "james cameron", fecha: 2009}, 
    {titulo: "skyfall", director:"sam mendes", fecha: 2012},
    {titulo:"scooby-doo", director:"raja gosnell", fecha: 2002}
]

let pelisDespuesDe2010 = peliculas.filter(pelis => pelis.fecha > 2010);
console.log(pelisDespuesDe2010);

let directores = peliculas.map((d, i )=>peliculas[i].director);
console.log(directores);

let titulos= peliculas.map((t,i) => peliculas[i].titulo);
console.log(titulos);

let nombres = directores.concat(titulos);
console.log(nombres);

let nombresSpread = [...titulos, ...directores];
console.log(nombresSpread);