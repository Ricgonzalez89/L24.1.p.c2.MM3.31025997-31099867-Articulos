export default class Cl_articulo {
    constructor(nombre, cantidad, precioBase) {
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.precioBase = precioBase;
    }

    set nombre(n) {
        this._nombre = n;
    }

    get nombre() {
        return this._nombre;
    }

    set cantidad(c) {
        this._cantidad = +c;
    }

    get cantidad() {
        return this._cantidad;
    }

    set precioBase(p) {
        this._precioBase = +p;
    }

    get precioBase() {
        return this._precioBase;
    }

    descuento() {
        return 0;
    }

    aPagar() {
        return this.cantidad * this.precioBase - this.descuento();
    }
}