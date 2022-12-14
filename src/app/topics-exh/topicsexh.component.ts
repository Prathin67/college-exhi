import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { SampleServiceService } from '../sample-service.service';
import { filter, takeUntil } from "rxjs/operators";
import { Observable, of, Subject } from 'rxjs';
import { cards } from '../model';

@Component({
  selector: 'app-topicsexh',
  templateUrl: './topicsexh.component.html',
  styleUrls: ['./topicsexh.component.css']
})
export class TopicsexhComponent implements OnInit {

  regestrcrd: Observable<cards[]>=of([]) ;
 
  onDestroy$= new Subject<boolean>()

  constructor(private service:SampleServiceService,private router:Router){

  }

  ngOnInit(): void {
   

    this.router.events.pipe(filter(event=>event instanceof NavigationStart)).pipe(takeUntil(this.onDestroy$)).subscribe((active:any)=>{
      if(active.url.includes('paper')){
        this.regestrcrd = this.service.getPaper()
          
        
      }
      else if(active.url.includes('political')){
        this.regestrcrd = this.service.getPolitical()
      }
      else if (active.url.includes('Science')){
        this.regestrcrd=this.service.getScience()
  
      }
      else{
        active.navigate(['/menu-cmp'])
      }
      

    })

    
    
    
    

  
  }


  ngOnDestroy(): void {
    this.onDestroy$.next(true)
    this.onDestroy$.complete()
    
  }

}
