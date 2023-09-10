import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cabecero',
  templateUrl: './cabecero.component.html',
  styleUrls: ['./cabecero.component.css']
})
export class CabeceroComponent implements OnInit {

  constructor() { }

  @Input() ingresoTotal: number = 0;
  @Input() egresoTotal: number = 0;
  @Input() porcentajeTotal: number = 0;
  @Input() presupuestoTotal: number = 0;

  ngOnInit(): void {
  }

}
