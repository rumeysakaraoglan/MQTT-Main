import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../models/Book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http:HttpClient) { }
  baseApiUrl="https://localhost:7003/api/Books/"

  getAllBooks():Observable<Book[]>{
    return this.http.get<Book[]>(this.baseApiUrl+"getall");
  }
}
