let objeto = {
    nombre: "hector",
    apellido : "jimenez",
    edad: "21",
    altura: "2.00",
    eresDesarrollador : true
};

let edad = objeto.edad;
console.log(edad);

let array = [{...objeto}, {nombre: "juan", edad: 22, altura : 1.70}, {nombre: "ernesto", edad: 21, altura: 1.60}];
console.log(array);

let arrray2 = array.sort((a,b) => a.edad - a.edad)
console.log(arrray2)