import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { CategoryComponent } from './category/category.component';
import { ApiService } from './service/api.service';
import { mqtt } from './models/mqtt.module';
import { HttpClient } from '@angular/common/http';
import { Komut } from './models/Komut';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

  template: `

  <p> app component </p>
  <app-komut-getir [data]="komutgetirmessage"></app-komut-getir>

  <app-log></app-log>
  <app-category (data)="categoryData($event)"></app-category>

  <app-nav (data)= "navData($event)"></app-nav>
   <app-category [navdata] ="navmesagge"> </app-category>

  `

})

export class AppComponent implements OnInit {


  getData() {

    const url = `"https://localhost:7003/api/komut`;
    return this.http.get(url);
  }



  komutgetirmessage: string;
  categoryData(message: string) {
    this.komutgetirmessage = message;

  }
  navmesagge: string;
  navData(message: string) {
    this.navmesagge = message;

  }
  reactiveForm: FormGroup
  homePageVisible: boolean = true;
  apiurl = "https://localhost:7003/api/komut";
  urlkomutekle = this.apiurl + "/add";


  title = 'mqtt_Deneme';
  errorMessage: any;
  id: any;
  constructor(private http: HttpClient) {

  }
  mqtts: mqtt[] = [];



  // ngOnInit(): void {
  //   alert("başladı")
  //   this.getmqtt().subscribe(data=>{
  //     this.mqtts = data
  //   })


  // }
  ngOnInit() {
    console.log("test");
    this.reactiveForm = new FormGroup({


    });
    var k = new Komut();
    k.komutkod = 100;
    k.komutparams = "ttt";

    this.http.post<any>(this.urlkomutekle, k).subscribe({
      next: data => {
        this.id = data.id;
        console.log("id : " + this.id);
      },
      error: error => {
        this.errorMessage = error.message;
        console.error('There was an error!', error);
      }
    })
  }

  onSubmit() {
    console.log(this.reactiveForm);
  }

  getmqtt() {
    return this.http.get<mqtt[]>(this.urlkomutekle);

  }


}

