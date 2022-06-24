public class main {
    public static void main(String[] args) {

        //#1
        var numeroIF = -9;
        if(numeroIF > 0){
            System.out.println("es positivo");
        } else if (numeroIF<0) {
            System.out.println("es negativo");
        }
        else{
            System.out.println("es cero");
        }

        //#2
        var numeroWhile = 0;
        while(numeroWhile < 3){
            numeroWhile++;
            System.out.println(numeroWhile);
        }

        //#3
        var numeroDowhile = 2;
        do {
            numeroDowhile++;
            System.out.println(numeroDowhile);
        }while (numeroWhile <2);


        //#4
        var numeroFor = 0;
        for (var i = 3; numeroFor < i; numeroFor++ ){
            System.out.println(numeroFor);
        }

        //#5
        var estación = "primavera";
        switch (estación){
            case "primavera":
                System.out.println("es primavera");
                break;
            case "verano":
                System.out.println("es verano");
                break;
            case "otoño":
                System.out.println("es otoño");
                break;
            case "invierno":
                System.out.println("es invierno");
                break;
        }

    }
}
