import { Pais } from "./pais";

export class Producto {
    codigo: number;
    descripcion: string;
    precio: number;
    stock: number;
    pais: Pais;
    comestible: boolean;

    constructor(
        codigo: number,
        descripcion: string,
        precio: number,
        stock: number,
        pais: Pais,
        comestible: boolean
    ) {
        this.codigo = codigo;
        this.descripcion = descripcion;
        this.precio = precio;
        this.stock = stock;
        this.pais = pais;
        this.comestible = comestible;
    }

    toFirestoreObject() {
        return {
            codigo: this.codigo,
            descripcion: this.descripcion,
            precio: this.precio,
            stock: this.stock,
            pais: this.pais.toFirestoreObject(),
            comestible: this.comestible
        };
    }
}
