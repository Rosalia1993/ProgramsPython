
#Hola   ya se pudo hacer el update prueba 3
#De dev_flujo2 a prod_flujo2
while(True):
    num1= float(input("Dame numero1: "))
    num2= float(input("Dame numero2: "))
    print("""Que operacion quieres hacer?
     1) Sumar
     2) Resta
     3) Multiplicacion""")
    opcion = int(input())
    if opcion == 1:
        print("la suma es: ", num1+num2)
    if opcion == 2:
        print("La resta es: ", num1-num2) 
    if opcion == 3:
        print("La multiplicacion es: ", num1 *num2)
    else :
        print("introduce una opcion correcta")
        continue
    