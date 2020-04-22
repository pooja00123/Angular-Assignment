import { Component } from '@angular/core';

@Component({
  selector: 'app-assignment1',
  templateUrl: './assignment1.component.html',
  styleUrls: ['./assignment1.component.css']
})

export class Assignment1Component {
  value: string;
  getVal(item){
    this.value=(item.target as HTMLInputElement).value;
    console.log(this.value)
  }
}
