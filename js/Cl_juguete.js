import Cl_articulo from "./Cl_articulo.js";

export default class Cl_juguete extends Cl_articulo {
    constructor(nombre, cantidad, precioBase, edad) {
        super(nombre, cantidad, precioBase);
        this.edad = edad;
    }

    set edad(e) {
        this._edad = +e;
    }

    get edad() {
        return this._edad;
    }

    descuento() {
        if (this.edad === 1)
            return (this.cantidad * this.precioBase) * 0.1;
        else
            return 0;
    }
}