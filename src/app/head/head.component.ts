// import { Component, OnInit } from '@angular/core';
// import { Observable, of } from 'rxjs';
// import { SampleServiceService } from '../sample-service.service';


// @Component({
//   selector: 'app-head',
//   templateUrl: './head.component.html',
//   styleUrls: ['./head.component.css']
// })
// export class HeadComponent implements OnInit{

// constructor(private dialogue){}


  // dataSource:Observable<any>=of([{}])
  

  // ngOnInit():void{
  //   this.dataSource=this.service.getELEMENT_DATA()
  // }
  // editRow(){
  //   this.service.createELEMENT({
  //       id: 100, 
  //       name: "fdh", 
  //       class: 12,
  //       topic: "social",

  //   },
  //   ).subscribe((d: any)=>(
  //     console.log("====",d)
      
  //   ))
//   // }
// }
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
  a:any
  name:any
  f:any
  l:any
  
  loggedIn$:Observable<any>=of(false)

  constructor(private dialog:MatDialog,private router:Router,private service:SampleServiceService){}
  ngOnInit(): void { 
    this.loggedIn$=this.service.loggedIn$
    this.a=localStorage.getItem('email')
    this.name=this.a?.split('.').join(' ').split('@',1).join('')
    this.f=((this.name?.split(' ',1))[0])[0]
    this.l=((this.name?.split(' ',2))[1])[0]
  }

  addStudent(){
     this.dialog.open(StepperComponent)

    // dialogRef.afterClosed().subscribe(result =>{
    //   console.log(`dialog result: ${result}`);
      
    // })
  }
  Out(){
    console.log('ioiuoiu')
    // localStorage.setItem('logged in' , 'false')
    //    console.log(localStorage.getItem('logged in '))
    //   this.router.navigate(['/menu-cmp'])
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