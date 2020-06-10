from io import open
import sys

fichero = open('contador.txt','a+')
fichero.seek(0)#puntero al principio
contenido = fichero.readline()

if len(contenido) == 0:
    contenido = '0'
    fichero.write(contenido)

fichero.close()

#tranformar el texto a un numero
try:
    contador = int(contenido)
    #funcion del usuario quiera
    if len(sys.argv) == 2:
        if sys.argv[1] == 'inc':
            contador += 1
        elif sys.argv[1] == 'dec':
            contador -= 1
    print(contador)

    #finalmente se escirben los cambio s en el fichero 
    fichero =open('contador.txt','w')
    fichero.write(str(contador))
    fichero.close()
except:
    print('fichero corrupto')