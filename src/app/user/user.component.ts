import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent{

  userName = "username"

  x = 'aaa'

  addItem(event: any){
    this.x = event
  }


  showInput = true

  myFunc(){
    this.showInput = !this.showInput
  }

  myFunc1(){
    this.showInput = !this.showInput
  }
  

}
