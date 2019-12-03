import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};


@Injectable({
  providedIn: 'root'
})
export class MailServiceService {

  private _infoUrl = "http://localhost/salzer/informacion.php";

  constructor(private _http:HttpClient) { }

  sendInfo(datos){
    return this._http.post(this._infoUrl,datos,httpOptions);
  }
}
