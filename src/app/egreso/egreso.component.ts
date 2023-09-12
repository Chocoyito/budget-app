import { Component, Input, OnInit } from '@angular/core';
import { EgresoService } from './egreso.service';
import { Egreso } from './egreso.model';

@Component({
  selector: 'app-egreso',
  templateUrl: './egreso.component.html',
  styleUrls: ['./egreso.component.css']
})
export class EgresoComponent implements OnInit {

  constructor(private egresoService: EgresoService) { }

  egresos: Egreso[] = [];
  @Input() ingresoTotal: number = 0;

  ngOnInit(): void {
    this.egresos = this.egresoService.egreso
  }

  getPorcentajeEgresos(egreso: Egreso): number{
    const indiceEgresos = this.egresos.indexOf(egreso)
    return this.egresos[indiceEgresos].valor / this.ingresoTotal
  }

  eliminarEgreso(egreso: Egreso): void{
    this.egresoService.eliminarEgreso(egreso)
  }

}
