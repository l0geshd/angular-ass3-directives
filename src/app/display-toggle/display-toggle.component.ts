import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-toggle',
  templateUrl: './display-toggle.component.html',
  styleUrls: ['./display-toggle.component.css']
})
export class DisplayToggleComponent implements OnInit {
  display = true;
  counter = 0;
  countArr:any[]=[];
  constructor() { }

  ngOnInit(): void {
  }

  toggleDisplay(){
    this.display = ! this.display;
    this.counter++;
    this.countArr.push(new Date())
  }

  getColor(){
    if(this.counter>5)
      return 'blue'
    else 
      return ''
  }
}
