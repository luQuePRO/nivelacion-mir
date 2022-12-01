

function sum(arreglo){
let suma = 0;

for (let i = 0; 
    i < arreglo.length; i++) 
    {
    suma=suma+arreglo[i];
}
return suma;
}


console.log(sum([1,2,3,4,5,9]))