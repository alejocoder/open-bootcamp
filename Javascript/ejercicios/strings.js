var name = "hector";
let apellido = "jimenez";

let estudiante = `${name} ${apellido}`;
console.log(estudiante);

let estudianteMayus = estudiante.toUpperCase();
console.log(estudianteMayus);

let estudianteMinus = estudiante.toLowerCase();
console.log(estudianteMinus);

let longitud = estudiante.length;
console.log(longitud);

let primeroName = name[0];
console.log(primeroName);

let primeroApellido = apellido[0];
console.log(primeroApellido);

let noEspacios = estudiante.trim().trimEnd().trimStart();
console.log(noEspacios);

let contenido = estudiante.includes(name);
console.log(contenido);