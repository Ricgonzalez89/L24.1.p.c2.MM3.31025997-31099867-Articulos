/* 3. ARTÍCULOS
Sea la información de un artículo:
nombre, cantidad y precio base. Se
espera que los artículos tengan un
descuento, pero eso dependerá de
cada departamento. 
El departamento de juguetes está ofreciendo un descuento del 10% si el juguete es para
edad de 1 año.
Usando la clase suministrada Cl_articulo, programe la clase Cl_juguete con el atributo edad y
el método descuento, que permita calcular el monto a pagar correctamente. Note que esta nueva
clase sólo amerita edad y descuento().
Realice un programa que lea los datos de un juguete y reporte el monto a pagar.
Ejemplos de la corrida:
Nombre del juguete: carrito
Cantidad: 2
Precio base: $10
Edad recomendada: 2
Monto a pagar por el carrito: $20.00
Nombre del juguete: peluche
Cantidad: 3
Precio base: $20
Edad recomendada: 1
Monto a pagar por el peluche: $54.00
*/
import Cl_juguete from "./Cl_juguete.js";

let juguete1 = new Cl_juguete("Carrito", 2, 10, 2);
let juguete2 = new Cl_juguete("Peluche", 3, 20, 1);

let salida = document.getElementById("salida");

let mostrarJuguete = (j) => {
    return `
    <br>Nombre del juguete: ${j.nombre}
    <br>Cantidad: ${j.cantidad}
    <br>Precio base: $${j.precioBase}
    <br>Edad recomendada: ${j.edad}
    <br>Monto a pagar por el ${j.nombre}: $${j.aPagar().toFixed(2)}
    `;
}

salida.innerHTML += `
${mostrarJuguete(juguete1)}
<br>
${mostrarJuguete(juguete2)}
`;