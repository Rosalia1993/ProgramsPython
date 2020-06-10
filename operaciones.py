


def suma(a,b):
    try:
        suma = a+b
    except TypeError:
        print("Tus datos deben ser numeros")
    else:
        return suma

def resta(a,b):
    try:
        resta= a-b
    except TypeError:
        print("Numeros por favor")
    else:
        return resta

def multiplicacion(a,b):
    try:
        multi= a*b
    except TypeError:
        print("Numeros por favor")
    else:
        return multi

def division(a,b):
    try:
        divi= a/b
    except TypeError:
        print("Numeros por favor")
    except ZeroDivisionError:
        print("no se puede dividir entre 0, esta indefinido")
    else:
        return divi


