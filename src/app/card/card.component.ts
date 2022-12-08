import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { AddComponent } from '../add/add.component';
import { SampleServiceService } from '../sample-service.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  nameDetails:any
 

  constructor(private route:ActivatedRoute , private service:SampleServiceService,private dialog:MatDialog,private router:Router){}
  

  ngOnInit(){
   
    this.service.getDetails(this.route.snapshot.params['id']).subscribe(detail=>{
      this.nameDetails=detail
     
    })
  }
  deleteRow(id:any){
    this.service.deleteELEMENT_DATA(id).subscribe(d=>
      {this.router.navigate(["menu-cmp"])});
  }
  
  editRow(data:any){
    
    const dialogRef = this.dialog.open(AddComponent,{
      height: "300px",
      width :"300px",
      data:{...data,showEditButton:true}

    })

    dialogRef.afterClosed().subscribe({
      
    })
  }

}
