from numpy import indices


def imc(estatura, peso):
    return peso / estatura**2

peso = float(input("escriba su peso (KG): " ))
estatura = float(input("escriba su estatura (m): "))

indice = round(imc(peso, estatura),2)

print ("su IMC es : {}".format(indice))