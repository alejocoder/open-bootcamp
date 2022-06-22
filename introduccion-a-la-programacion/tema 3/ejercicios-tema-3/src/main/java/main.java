
public class main {
    public static void main(String[] args) {
        //parte 1
        var resultado = suma(1,3,7);
        System.out.println(resultado);
        // parte 2
        coche miCoche = new coche();
        miCoche.SumarPuerta();
        System.out.println(miCoche.puertas);

    }
    public  static int suma (int a, int b, int c){
        return a + b + c;
    }

}
// parte 2
class coche{
    public int puertas = 4;

    public void SumarPuerta(){
        this.puertas++;
    }
}
