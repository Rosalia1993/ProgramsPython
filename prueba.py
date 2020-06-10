
#remplaza los valores de la ultima posicion cuando 
#no son el total de la suma de los anteriores

matriz = [
    [1,1,1,3],
    [2,2,2,7],
    [3,3,3,9],
    [4,4,4,13]
]



if (matriz[3]== sum(matriz[3][:3])):
    print(matriz[3][-1])
    print("es verdad")
else:
  matriz[3][-1]=  sum(matriz[3][:3])
  print(matriz[3][-1])
  #print("Verifica")
   

print(matriz)


