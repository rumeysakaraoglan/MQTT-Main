import { Component, Input,Output, OnInit, EventEmitter, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators,FormBuilder} from '@angular/forms';
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
  @Output() data : EventEmitter<any>=new EventEmitter();
  connectAddForm:FormGroup;


  // navForm = new FormGroup({
  //   ServerAden: new FormControl('',[Validators.required,
  //      Validators.minLength(5)
  //     ]),
  //   SubscribeTopic : new FormControl('',[Validators.required,
  //   Validators.minLength(10)])
  // })

  @ViewChild('myInput') myInput: any;
  SubscribeTopic: any;

  constructor( private apiservice: ApiService, private formBuilder: FormBuilder ) { }
  title= "Mqtt"
  childData="mfkfm ıvmfg";

 createConnectForm(){
  this.connectAddForm=this.formBuilder.group({
    ServerAden:["",Validators.required],
    SubscribeTopic:["",Validators.required]
  })
 }


 add(){
  if(this.connectAddForm.valid){
    let connect:mqtt=Object.assign({},this.connectAddForm.value)
    console.log(connect);

  }else{
    alert("Hata var")
  }
 }

  ngOnInit(){
   this.createConnectForm();
  //   this.apiservice.getAllBooks()
  //     .subscribe({
  //       next: data =>{
  //        this.komutlist = data;
  //        console.log(this.komutlist)
  //       });

this.serverAden();

  //  this.data.emit("nav dan gelen veri ");
  //  this.reactiveForm=new FormGroup({
  //   ServerAden: new FormControl(null),
  //   SubscribeTopic: new FormControl(null),
  //  });
  // }

  // onSubmit(){
  //   console.log(this.navForm.value);
  // }


  // get form(){return this.navForm.controls;}
  // getCihaz(): mqtt {
  //   const data = new mqtt();

  //   //data . id = this.navForm ? this.navForm.id :0;
  //   data.SubscribeTopic=this.SubscribeTopic.value;
  //   data.ServerAden=this.serverAden.value;

  //   return data;
  // }


  }

  serverAden(){
    return this.connectAddForm.get('ServerAden');
  }

  // Updatenav(){
  //   this.navForm.patchValue({
  //     ServerAden:'rr',
  //     SubscribeTopic:'rrr'
  //   })
  // }


  // getAll():Observable<mqtt>{
  //   return this.http.get<navForm>(this.baseApiUrl+"getAll");
  // }

}
function serverAden() {
  throw new Error('Function not implemented.');
}

