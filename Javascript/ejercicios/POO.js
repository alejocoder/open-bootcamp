class Estudiante {
    constructor(nombre, asignaturas){
        this.nombre = nombre;
        this.asignaturas = ["javascript", "HTML", "CSS"]
    }

    obtenDatos(objeto){
        return objeto ={nombre:nombre, asignaturas: asignaturas};
    }

}

class Pepe extends Estudiante{

    obtenDatos(objeto);
    
}
console.log(objeto);