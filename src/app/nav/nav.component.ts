import { Component, Input,Output, OnInit, EventEmitter, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators,FormBuilder, FormArray} from '@angular/forms';
import { Subscriber } from 'rxjs';
import { mqtt } from '../models/mqtt.module';
import { ApiService } from '../service/api.service';

// @Input()
// navCount:number = 0;
// @Output()changeNav=new EventEmitter();

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
  template:`
  <p> nav component </p>
  `
})
export class NavComponent implements OnInit {

  navForm=new FormGroup({
    ServerAden : new FormControl(''),
    SubscribeTopic : new FormControl('')

  })
  onSubmit(){
    console.log(this.navForm.value);
  }
  get form(){return this.navForm.controls;}

   getCihaz(): mqtt{
  const data =new mqtt();
  data.ServerAden=this.form.ServerAden.value;
  data.SubscribeTopic=this.form.SubscribeTopic.value;
  return data;
}
constructor( private apiservice: ApiService, private formBuilder: FormBuilder ) { }
ngOnInit(): void {
  this.navForm;
  this.apiservice
  .getAllApi().subscribe({
    next: data =>{
      //this.navForm =data;
      console.log(this.navForm)
    }
  });
}






  @Output() data : EventEmitter<any>=new EventEmitter();
  //connectAddForm:FormGroup;
  @ViewChild('myInput') myInput: any;

  title= "Mqtt"
  childData="mfkfm ıvmfg";


 }




  // ngOnInit(){
  //  this.createConnectForm();
  //   this.apiservice
  //     .subscribe({
  //       next: data =>{
  //        this.createConnectForm = data;
  //        console.log(this.connectAddForm)
  //       }});
  //     }
  // this.serverAden();

  //  this.data.emit("nav dan gelen veri ");
  //  this.connectAddForm=new FormGroup({
  //   ServerAden: new FormControl(null),
  //   SubscribeTopic: new FormControl(null),

  // }













