import { Component, Input ,OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ondetails',
  templateUrl: './ondetails.component.html',
  styleUrls: ['./ondetails.component.css']
})

export class OndetailsComponent implements OnInit{

@Input() data:any;
@Output() parent=new EventEmitter<any>()
@Output() deltparent=new EventEmitter<any>()
constructor(){

}
ngOnInit(): void {
  
}
editRow(){
  this.parent.emit(this.data)
}
deleteRow(){
  this.deltparent.emit(this.data)

}
}
