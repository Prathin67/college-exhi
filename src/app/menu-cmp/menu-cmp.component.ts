import { AfterViewInit, Component,OnDestroy,OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router, TitleStrategy } from '@angular/router';
import { Observable, of, Subject, Subscription, takeUntil } from 'rxjs';
import { AddComponent } from '../add/add.component';
import { SampleServiceService } from '../sample-service.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { ELEMENT_DATA } from '../model';

@Component({
  selector: 'app-menu-cmp',
  templateUrl: './menu-cmp.component.html',
  styleUrls: ['./menu-cmp.component.css']
})
export class MenuCmpComponent implements OnInit  {
  displayedColumns = [
    'slno',
    'name',
    'class',
    'topic',
    'star',
    'gg'


  ];
  
  @ViewChild('Paginator') paginator: MatPaginator | undefined;
    
    
  

  
  constructor(private service:SampleServiceService,private route:ActivatedRoute, private router: Router,private dialog:MatDialog){}


  
  dataSource:Observable<ELEMENT_DATA[]>=of([{

  slno: '',
  name:'',
  email: '',
  class: '',
  topic:'',
  id: '',
  wishlist:false
  }])

  
  onDestroy$= new Subject<boolean>()
 

  ngOnInit():void{
    this.service.getELEMENT_DATA()
    this.dataSource=this.service.dataEvent$}
  editRow(data:any){

    const dialogRef = this.dialog.open(AddComponent,{
      
      data:{...data,showEditButton:true}

    })

    dialogRef.afterClosed().pipe(takeUntil(this.onDestroy$)).subscribe(result=>{
     
    })
  }

  deleteRow(id:any){
    this.service.deleteELEMENT_DATA(id).pipe(takeUntil(this.onDestroy$)).subscribe();
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
  star(data:any){
    this.service.updatewish(data).pipe(takeUntil(this.onDestroy$))
    .subscribe(()=>{
      window.location.reload()
      
    })
    

  }
  ngOnDestroy(): void {
    this.onDestroy$.next(true)
    this.onDestroy$.complete()
    
  }

}
  
