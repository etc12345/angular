import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  selectedBooks:string[]=[];
  constructor() { }

  ngOnInit(): void {
    this.selectedBooks = JSON.parse(sessionStorage.getItem('selectedbooks'));
    // this.selectedBooks.split(',');
    console.log(this.selectedBooks);
  }

}
