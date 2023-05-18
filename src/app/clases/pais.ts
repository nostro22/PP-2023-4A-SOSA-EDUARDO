import { Timestamp } from "firebase/firestore";

export class Pais {
    nombre: string;
    bandera: string;
    info: any;
    

    constructor(nombre:string,bandera:string, info:any) {
        this.nombre = nombre;
        this.bandera = bandera;
        this.info = info;

    }
    
    toFirestoreObject() {
        return {
            nombre: this.nombre,
            bandera: this.bandera,
            info: this.info
        };
    }

    
}
