import { Component, OnInit } from '@angular/core';
import { IngresoService } from '../ingreso/ingreso.service';
import { EgresoService } from '../egreso/egreso.service';
import { Ingreso } from '../ingreso/ingreso.model';
import { Egreso } from '../egreso/egreso.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  constructor(private ingresoService: IngresoService, private egresoService: EgresoService) { }

  valor: string = 'ingresoOpcion'
  descripcionInput: string = ''
  valorInput: number = 0

  ngOnInit(): void {
  }

  obtenerValor(event: any): void{
    this.valor = event.target.value
  }

  agregarValor(): void{
    if (this.valor === 'ingresoOpcion')
      this.ingresoService.ingreso.push(new Ingreso(this.descripcionInput, this.valorInput))
    else
    this.egresoService.egreso.push(new Egreso(this.descripcionInput, this.valorInput))
  }

}
