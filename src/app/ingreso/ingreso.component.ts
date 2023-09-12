import { Component, OnInit } from '@angular/core';
import { Ingreso } from './ingreso.model';
import { IngresoService } from './ingreso.service';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.css']
})
export class IngresoComponent implements OnInit {

  constructor(private ingresoService: IngresoService) { }
  
  ingresos: Ingreso[] = []

  ngOnInit(): void {
    this.ingresos = this.ingresoService.ingreso
  }

  eliminarIngreso(ingreso: Ingreso): void{
    this.ingresoService.eliminarIngreso(ingreso)
  }

}
