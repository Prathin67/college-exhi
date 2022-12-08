import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { filter, map, Observable, of } from 'rxjs';
import { SampleServiceService } from '../sample-service.service';


@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  displayedColumns:string[]=['slno',
  'name',
  'class',
  'topic',
  'star'
]
dataSource:Observable<any>=of([{}])
  

constructor(private service:SampleServiceService,private router:Router){}



  ngOnInit() {
    this.service.getELEMENT_DATA()
    this.dataSource=this.service.dataEvent$
    .pipe(map((n:any)=>{
     

      return(n.filter((a:any)=>a.wishlist))
    }))
   

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
