import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent{

  @Output() newItemEvent = new EventEmitter();

  showInput = true
  country = "Ukraine"
  myFunc(){
    this.showInput = !this.showInput
    this.newItemEvent.emit(this.country)
  }

  myFunc1(){
    this.showInput = !this.showInput
  }

}
