const original = ['Rojo', 'Verde', 'Azul', 'Amarillo'];
// -------
let indiceAmarillo = null;
let cantidadColoresConA = 0;
let arregloSinAzul = [];
let ordenadoPorCantidadLetras = [];
let arregloConNuevoColorInicio = [];
let arregloConNuevoColorFin = [];

// ------- indiceAmarillo: Indice de la ubicacion en el arreglo de 'Amarillo'

indiceAmarillo = original.findIndex(color => color === 'Amarillo');

// ------- cantidadColoresConA: Cuantos colores hay en el arreglo con la letra 'a' (Mayuscula o minuscula)

const ColoresConA = () => {
    
    for(let i = 0; i < original.length; i++)
    {
        if(original[i].toLowerCase().includes('a') === true){
            cantidadColoresConA += 1;
        }
    }
}

ColoresConA();

// ------- arregloSinAzul: El arreglo original sin el valor 'Azul'.

original.splice(2, 1);
arregloSinAzul = original;

// ------- ordenadoPorCantidadLetras: El arreglo orginal ordenado de forma ascendente por la cantidad de letras en su nombre.

ordenadoPorCantidadLetras = original.slice().sort((a,b) => b.length - a.length);

// ------- arregloConNuevoColorInicio: El arreglo original con un nuevo color al inicio del mismo.

original.unshift('Naranja');
arregloConNuevoColorInicio = original;

// ------- - arregloConNuevoColorFin: El arreglo original con un nuevo color al final del mismo.

original.push('Violeta');
arregloConNuevoColorFin = original;



console.log(indiceAmarillo);
console.log(cantidadColoresConA);
console.log(arregloSinAzul);
console.log(ordenadoPorCantidadLetras);
console.log(arregloConNuevoColorInicio);
console.log(arregloConNuevoColorFin);