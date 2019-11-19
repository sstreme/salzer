import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {



  constructor() { }

  ngOnInit() {
  }

  getFecha() {
    let fecha = new Date().toJSON().slice(0, 10).replace(/-/g, '/');
    let fechas = fecha.split("/");
    let meses = ['', 'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    return fechas[2] + " de " + meses[fechas[1]]
  }

}
