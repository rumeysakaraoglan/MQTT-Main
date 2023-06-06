import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IDepartment } from '../department.interface';
import { KomutDepartmant } from '../KomutDepartmant.interface';
import { AppComponent } from '../app.component';
import { FormControl, FormGroup } from '@angular/forms';
import { Komut, TaskParam } from '../models/Komut';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  template:`
  <p> category component {{datanav}}</p>
  `


})
export class CategoryComponent implements OnInit {
  reactiveForm: FormGroup;
  @Input() datanav :string;

@Output() data : EventEmitter<Komut> = new EventEmitter();
   categoryForm=new FormGroup({
    prefix: new FormControl(''),
    serial:new FormControl(''),
    checkbox:new FormControl(''),
    startbaudrate:new FormControl(''),
    maxbaud:new FormControl(''),
    databits:new FormControl(''),
    stopbits:new FormControl(''),
    obiscodelist:new FormControl(''),
    note:new FormControl(''),
    tag:new FormControl(''),
    schedule:new FormControl(''),
    maxtry:new FormControl(''),
    startoffset:new FormControl(''),
    namelist:new FormControl(''),


   })



modes : any[];
ngOnInit(): void{

  this.modes =[

    { label: "Kısa", value: "DRO" },
    { label: "Uzun", value: "LDRO" },
    { label: "Özel", value: "CUSTOM" },
    {label: "Tüketim", value: "CONSUMPTION" },
    { label: "Tüketim * 1", value: "CONSUMPTIONx1" },
    { label: "Tüketim * 2", value: "CONSUMPTIONx2" },
    { label: "Tüketim * 12", value: "CONSUMPTIONx12" }


];


  this.reactiveForm=new FormGroup({
    prefix: new FormControl(null),
    serial : new FormControl(null),
    obiscodelist: new FormControl(null),
    namelist: new FormControl(null),
    note: new FormControl(null),
    schedule: new FormControl(null),
    startbaudrate: new FormControl(null),
    maxbaud: new FormControl(null),
    databits: new FormControl(null),
    stopbits: new FormControl(null),
    maxtry: new FormControl(null),
    startoffset: new FormControl(null),
    tag: new FormControl(null),


  });

}

onSubmit(){
  console.log(this.categoryForm);


  var k = new TaskParam();


  this.reactiveForm.controls['prefix'].value;

  // this.data.emit('categoy den gelen' );
}



onSelectTask() {
  // if (this.modes === 'addtask') {
  //   window.location.href = '/addtask';
  // }
 }
  @Input()
  public screen!:number ;




  public komut:string=" General ";

  public departments:Array<IDepartment>=[
  {id:1,name:'Login'},
  {id:2,name:'Getdeviceinfo'},
  {id:3,name:'Gettime'},
  {id:4,name:'Settime'},
  {id:5,name:'Getconfig'},
  {id:6,name:'Setconfig'},
  {id:7,name:'Restartdevice'},
  {id:8,name:'Restartrfmodule'},
  {id:9,name:'StartMqtttrace'},
  {id:10,name:'StopMqtttrace'},
  {id:11,name:'Addtask'},
  {id:12,name:'Addtasklist'}


];

  public deptId:number =0;


}

