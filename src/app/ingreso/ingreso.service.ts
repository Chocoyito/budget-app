import { Ingreso } from "./ingreso.model";

export class IngresoService{
    ingreso: Ingreso[] = [
        new Ingreso('Salario', 4000),
        new Ingreso('Venta de coche', 500)
    ]

    eliminarIngreso(ingreso: Ingreso): void{
        let indice = this.ingreso.indexOf(ingreso)
        this.ingreso.splice(indice, 1)
    }
}