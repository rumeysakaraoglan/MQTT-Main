import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-ornek',
  templateUrl: './ornek.component.html',
  styleUrls: ['./ornek.component.css']
})
export class OrnekComponent implements OnInit {
  myForm: FormGroup;
  reactiveForm : FormGroup;
  constructor(private formBuilder: FormBuilder, private http: HttpClient) { }

  ngOnInit(): void {
    // this.reactiveForm= new FormGroup({

    //   ServerAden: new FormControl(null),
    //   SubscribeTopic : new FormControl(null),
    //   komutlar:new FormControl(null)
    // });
    this.myForm = this.formBuilder.group({
      // Formdaki alanları burada tanımlayabilirsiniz
      // Örneğin:
      name: '',
      email: ''
    });
  }


onSubmit() {
  const formData = this.myForm.value;
  // GET isteği yapılacak URL'i oluşturun
  const url = `https://localhost:7003/api/komut=${formData.name}&email=${formData.email}`;

  this.http.get(url).subscribe((response) => {
    // İstek tamamlandığında yapılacak işlemler
    console.log(response);
  });
}
}
