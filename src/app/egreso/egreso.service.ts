import { Egreso } from "./egreso.model";

export class EgresoService{
    egreso: Egreso[] = [
        new Egreso('Renta dpto', 900),
        new Egreso('Ropa', 200)
    ]

    eliminarEgreso(egreso: Egreso): void{
        let indice = this.egreso.indexOf(egreso)
        this.egreso.splice(indice, 1)
    }
}