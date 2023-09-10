import { Component } from '@angular/core';
import { IngresoService } from './ingreso/ingreso.service';
import { EgresoService } from './egreso/egreso.service';
import { Ingreso } from './ingreso/ingreso.model';
import { Egreso } from './egreso/egreso.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'presupuesto-app';

  ingresos: Ingreso[] = [];
  egresos: Egreso[] = [];

  constructor(private ingresoService: IngresoService, private egresoService: EgresoService){
    this.ingresos = ingresoService.ingreso;
    this.egresos = egresoService.egreso;
  }

  getIngresoTotal(): number{
    let ingresoTotal: number = 0;
    this.ingresos.forEach(ingreso => {
      ingresoTotal += ingreso.valor;
    })
    return ingresoTotal;
  }

  getEgresoTotal(): number{
    let egresoTotal: number = 0;
    this.egresos.forEach(egreso =>{
      egresoTotal += egreso.valor;
    })
    return egresoTotal;
  }

  getPorcentajeTotal(): number{
    return this.getEgresoTotal() / this.getIngresoTotal();
  }

  getPresupuestoTotal(): number{
    return this.getIngresoTotal() + this.getEgresoTotal();
  }
}
