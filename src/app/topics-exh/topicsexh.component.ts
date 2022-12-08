import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SampleServiceService } from '../sample-service.service';

@Component({
  selector: 'app-topicsexh',
  templateUrl: './topicsexh.component.html',
  styleUrls: ['./topicsexh.component.css']
})
export class TopicsexhComponent implements OnInit {

  regestrcrd:any
 

  constructor(private service:SampleServiceService,private router:Router){

  }
  ngOnInit(): void {
    this.service.getcards().subscribe((d)=>{
      this.regestrcrd=d
    })
  
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


}
