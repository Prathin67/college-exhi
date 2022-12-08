
import { SelectorContext } from '@angular/compiler';
import  { Component,OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AddComponent } from '../add/add.component';
import { SampleServiceService } from '../sample-service.service';
import { StepperComponent } from '../stepper/stepper.component';

@Component({
    selector: 'app-head',
    templateUrl: './head.component.html',
    styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit{
  mail:any
  name:any
  firstName:any
  lastName:any
  
  loggedIn$:Observable<any>=of(false)

  constructor(private dialog:MatDialog,private router:Router,private service:SampleServiceService){}
  ngOnInit(): void { 
    this.loggedIn$=this.service.loggedIn$
    this.mail=localStorage.getItem('email')
    this.name=this.mail?.split('.').join(' ').split('@',1).join('')
    this.firstName=((this.name?.split(' ',1))[0])[0]
    this.lastName=((this.name?.split(' ',2))[1])[0]
  }

  addStudent(){
     this.dialog.open(StepperComponent)


  }
  Out(){
   
   
    localStorage.clear()
    this.router.navigate(['/login'])
  
     

  }
  
  reg(){
    this.router.navigate(['/menu-cmp'])
  }
  exhi(){
    this.router.navigate(['/topics-exh'])
  }
  wish(){
    this.router.navigate(['/wishlist'])
  }
  onSearch(value:any){

    console.log('------',value)
    this.service.searchData(value)

  }

}  