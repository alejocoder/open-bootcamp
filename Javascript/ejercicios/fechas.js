const hoy = new Date;
console.log(hoy)

const nacimiento = new Date(2001, 4, 10);
console.log(nacimiento);

let comprobacion = (hoy.getTime() > nacimiento.getTime());
console.log(comprobacion);

let dia = nacimiento.getDate()
console.log(dia)

let mes = nacimiento.getMonth()
console.log(mes)

let año = nacimiento.getFullYear()
console.log(año)