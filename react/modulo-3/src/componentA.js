export class ComponentA {

    
    nombre= "";
    apellido= "";
    email = "";
    conectado = true;

    constructor(nombre, apellido, email, conectado){
        this.nombre=nombre;
        this.apellido = apellido;
        this.email = email;
        this.conectado = conectado;
    }

}


export default {ComponentA, contacto};
