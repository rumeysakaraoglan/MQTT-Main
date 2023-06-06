import { HttpClient } from "@angular/common/http";
import { Component, Injectable, OnInit } from "@angular/core";
import { mqtt } from "../models/mqtt.module";
import { Observable } from "rxjs";
import { Book } from "../models/Book";
import { Komut } from "../models/Komut";
@Injectable({
  providedIn:'root'
})




export class ApiService  {
  baseUrl='https://localhost:7003/api/Contact';

  constructor(private http:HttpClient ) {
  }


  getAllApi(): Observable<mqtt[]>
  {
    return this.http.get<mqtt[]>(this.baseUrl);

  }
  getAllBooks():Observable<mqtt[]>
  {
  return this.http.get<mqtt[]>(this.baseUrl+"/GetContacts/getcontacts");
  }

}
