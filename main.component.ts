import { BookService } from './../book.service';
import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  studentname:string;
  usn:string;
  semester:number;
  bookList:any[]=[];
  selectedBooks:any[]=[];
  constructor(private _Books:BookService,private Route:Router) { }

  ngOnInit(): void {
    this.bookList = this._Books.book;
  } 
  directToDisplay(){
    // for(let book of this.bookList){
    //   var n = book.name;
    //   var ele = document.querySelector('input[id=n]');
    //   if(ele.checked){
    //     console.log("hi");
    //     this.selectedBooks.push(book);
    //   }
    // }
    sessionStorage.setItem('selectedbooks',JSON.stringify(this.selectedBooks));
    console.log(this.selectedBooks);
    this.Route.navigate(['display']);
  }
  onChange(bookname:string,isChecked:boolean){
    if(isChecked){
      this.selectedBooks.push(bookname);
      console.log(this.selectedBooks);
    }else{
      this.selectedBooks = this.selectedBooks.filter(book => book!=bookname);
      console.log(this.selectedBooks);
    }
  }
}
