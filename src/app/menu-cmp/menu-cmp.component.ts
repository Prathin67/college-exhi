import { AfterViewInit, Component,OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router, TitleStrategy } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AddComponent } from '../add/add.component';
import { SampleServiceService } from '../sample-service.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-menu-cmp',
  templateUrl: './menu-cmp.component.html',
  styleUrls: ['./menu-cmp.component.css']
})
export class MenuCmpComponent implements OnInit {
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


  
  dataSource:Observable<any>=of([{}])

  
 

  ngOnInit():void{
    this.service.getELEMENT_DATA()
    this.dataSource=this.service.dataEvent$}
  editRow(data:any){

    const dialogRef = this.dialog.open(AddComponent,{
      
      data:{...data,showEditButton:true}

    })

    dialogRef.afterClosed().subscribe(result=>{
     
    })
  }
  deleteRow(id:any){
    this.service.deleteELEMENT_DATA(id).subscribe();
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
    this.service.updatewish(data)
    .subscribe(d=>{
      
      window.location.reload()
    })

  }

}
  
