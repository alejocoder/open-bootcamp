public class main {

    public static void main(String[] args) {
        Cliente cliente = new Cliente();
        Trabajador trabajador = new Trabajador();

        cliente.edad = 23;
        cliente.telefono = 1234;
        cliente.nombre = "andres";
        cliente.credito = true;

        System.out.println("la edad del cliente es:" + cliente.edad);
        System.out.println("el telefono del cliente es:"+cliente.telefono);
        System.out.println("el nombre del cliente es: "+cliente.nombre);
        System.out.println("el ciente tiene credito: "+cliente.credito);

        trabajador.edad = 22;
        trabajador.telefono = 55555;
        trabajador.nombre = "luis";
        trabajador.salario = 22222;

        System.out.println("la edad del trabajador es :"+trabajador.edad);
        System.out.println("el telefono del trabajador es :"+trabajador.telefono);
        System.out.println("el nombre del trabajador es :"+trabajador.nombre);
        System.out.println("el salario del trabajador es :"+trabajador.salario);
    }
}

class Persona{

    String nombre;
    int edad;
    int telefono;
}

class Cliente extends Persona{

    boolean credito;
}

class Trabajador extends Persona{

    int salario;
}