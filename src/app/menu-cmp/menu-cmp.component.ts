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

  
 
  // ngAfterViewInit() {
  //   this.dataSource.paginator = this.paginator;
  // }

  ngOnInit():void{
    this.service.getELEMENT_DATA()
    this.dataSource=this.service.dataEvent$}
  editRow(data:any){
    // this.service.createELEMENT({}).subscribe(d=>{
      
    //   console.log('====',d)
      
    // })
    // this.dialog.open(AddComponent)
    const dialogRef = this.dialog.open(AddComponent,{
      // height: "300px",
      // width :"300px",
      data:{...data,showEditButton:true}

    })

    dialogRef.afterClosed().subscribe(result=>{
      console.log(`Dialog result:${result}`)
    })
  }
  deleteRow(id:any){
    this.service.deleteELEMENT_DATA(id).subscribe();
  }
  // card(id:any){
  //   this.router.navigate(['card/',id])
    

    
  // }
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
  star(data:any){
    this.service.updatewish(data)
    .subscribe(d=>{
      console.log('---',d)
      window.location.reload()
    })

  }

}
  
//   deleteRow(id:any){
//     this.service.deleteELEMENT_DATA(id)
//   }

// }

// export interface PeriodicElement {
//   name: string;
//   position: number;
//   weight: number;
//   symbol: string;
// }

// const ELEMENT_DATA: PeriodicElement[] = [
//   {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
//   {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
//   {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//   {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},

  
