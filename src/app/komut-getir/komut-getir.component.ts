import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder,FormControl,FormGroup,Validators } from '@angular/forms';
import { IDepartment } from '../department.interface';
import { AppComponent } from '../app.component';
import { CategoryComponent } from '../category/category.component';
import { ɵDomSanitizerImpl } from '@angular/platform-browser';
import { Book } from '../models/Book';
import { ApiService } from '../service/api.service';
import { mqtt } from '../models/mqtt.module';
import { BookService } from '../service/book.service';
import { IOTCommandRequest, IOTCommandRequestAddTask, Komut, OTCommandRequestLogin } from '../models/Komut';
import { KomutService } from '../service/komut.service';
import { AppRoutingModule } from '../app-routing.module';
// import { Task } from '../models/Task';



@Component({
  selector: 'app-komut-getir',
  templateUrl: './komut-getir.component.html',
  styleUrls: ['./komut-getir.component.css'],
  template:`
  <p> komut-getir component {{data}} </p>
  `
})
export class KomutGetirComponent implements OnInit {

  @Input() data :string;

  checked = false;
  isselected:boolean | undefined;
  showCategory: boolean = false;
  selectedOption: string | undefined;
  req :IOTCommandRequest;

  handleDropdownChange(event:any ){



    if( event.target.value === 'AddTask'){
      this.req = new IOTCommandRequestAddTask();

      this.showCategory=true;
      console.log("git....")
      //location.href="/category";
      location.replace("category")
    }else{
      this.showCategory=false;
    }


  }

// tasks=['Login','Getdeviceinfo','Gettime','Settime','Getconfig','Setconfig','Restartdevice','Restartrfmodule','StartMqtttrace','StopMqtttrace','Addtask','Addtasklist']
  selectVal:string="";
 public deptId:number =0;
  public isLoading!: boolean;




  private aktifKomut :string="";

  mesaj :string="test mesaj";

  selected:any;

  komutlist: mqtt[] = [];

  books:Book[]=[];




  yukleniyor :boolean=false;



  @Input()
  public loadingTemplate!: TemplateRef<any>;

  @Input()
  public screen!:number ;

  @Input()
  public myCategory! :CategoryComponent;

  @Input()
  public myKomut! :CategoryComponent;

  selectedBookIdControl = new FormControl(0);
  showMessage: any;
 Addtask: any;
 condition: any;


  constructor(
    private apiservice: ApiService ,
    private bookService:BookService,

  ){

}

  ngOnInit(): void {
    // this.apiservice.getAllBooks()
    //   .subscribe({
    //     next: data =>{
    //      this.komutlist = data;
    //      console.log(this.komutlist)

    //     }
    //   })

    //   this.getAllBooksByService()
  }


  getAllBooksByService(){
    this.bookService.getAllBooks().subscribe({
      next:response=>{
        this.books=response
        console.log(response)
      }
    })
  }



  public onOptionsSelected(event:any) {
    const value = event.target.value;
    this.selected = value;

    this.mesaj= value;
    console.log(value);
    console.log("degisti -----------");
 }

  public OnDeptChange(){

    console.log("degisti -----------");
    this.mesaj = this.deptId.toString() ;

   this.myCategory.komut = this.getAktifKomut();

   this.myCategory.deptId = this.deptId;
    console.log(this.deptId);
    console.log( this.getAktifKomut() );

  }

  public resetDept(){
     this.deptId=1;
  }



  public getAktifKomut(){
    return this.aktifKomut;
  }



  }



