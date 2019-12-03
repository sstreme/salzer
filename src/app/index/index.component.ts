import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MailServiceService } from '../mail-service.service';
import { Respuesta } from '../Respuesta';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  nombre:string = "";
  email:string = "";
  telefono:string = "";
  mensaje:string = ""

  constructor(private _mailService:MailServiceService, private _snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  getFecha() {
    let fecha = new Date().toJSON().slice(0, 10).replace(/-/g, '/');
    let fechas = fecha.split("/");
    let meses = ['', 'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    return fechas[2] + " de " + meses[fechas[1]] + " de "+fechas[0];
  }

  enviarDatos(form:NgForm){
    let datos = {
      nombre: this.nombre,
      email: this.email,
      telefono: this.telefono,
      mensaje: this.mensaje
    };
    if(form.valid){
      this._mailService.sendInfo(datos).subscribe(
        res => {
          if((<Respuesta>res).mensaje==="enviado"){
            this._snackBar.open("Datos enviados exitosamente!",'Cerrar',{
              duration: 5000
            });
            form.resetForm();
          }
        }
      )
    }
  }

}
