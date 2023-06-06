import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { LogComponent } from './log/log.component';
import { CategoryComponent } from './category/category.component';
import { KomutGetirComponent } from './komut-getir/komut-getir.component';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { HomepageComponent } from './homepage/homepage.component';
import { HighlightDirective } from './highlight.directive';
import {  HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { OrnekComponent } from './ornek/ornek.component';

const appRoute: Routes =[
  {path:'category', component:CategoryComponent},
]



@NgModule({

  declarations: [
    AppComponent,
    NavComponent,
    LogComponent,
    CategoryComponent,
    KomutGetirComponent,
    HomepageComponent,
    HighlightDirective,
    OrnekComponent,

  ],
  imports: [
    BrowserModule,
   // AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoute)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
