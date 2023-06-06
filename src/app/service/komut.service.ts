import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Komut } from '../models/Komut';
import { mqtt } from '../models/mqtt.module';

@Injectable({
  providedIn: 'root'
})
export class KomutService {

  constructor(private http : HttpClient){}
  baseApUrl="https://localhost:7003/api/Komut"
  baseApiUrl="https://localhost:7003/api/Connect"

  getAllKomuts():Observable<Komut[]>{
    return this.http.get<Komut[]>(this.baseApUrl+"getAll");

  }

  getAll():Observable<mqtt>{
    return this.http.get<mqtt>(this.baseApiUrl+"getAll");
  }

}

export class connectAddForm{

  constructor(private http: HttpClient){}
  baseApiUrl="https://localhost:7003/api/Connect"
  getAll():Observable<connectAddForm>{
    return this.http.get<connectAddForm>(this.baseApiUrl+"getAll");
  }

  // List<Contact> veriGetir(){
  //   this.List<Contact> myList= new List<nesne>;
  // }

}
