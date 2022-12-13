import { Component, Inject, inject, OnInit,OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subject, takeUntil } from 'rxjs';
import { SampleServiceService } from '../sample-service.service';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  formdata:any

  constructor(public dialog:MatDialog,private serv:SampleServiceService,@Inject(MAT_DIALOG_DATA) public data:any,private _snackBar:MatSnackBar){}

  onDestroy$= new Subject<boolean>()

  ngOnInit():void{
    
    this.formdata = new FormGroup({
      slno : new FormControl ("",Validators.required),
      name : new FormControl(this.data?.name??"",Validators.required),
      class : new FormControl(this.data?.class??""),
      topic : new FormControl(this.data?.topic??"")
      
    });
  }
  submit(data:any){

    this.serv.createELEMENT({...data,id:data['slno']}).pipe(takeUntil(this.onDestroy$)).subscribe(()=>{
      window.location.reload();
      
     
    })
    
    this.dialog.closeAll();
   
    
  }
updt(details:any){
  
  
this.serv.editELEMENT_DATA({...details,id:this.data.id}).pipe(takeUntil(this.onDestroy$)).subscribe(data=>{
this. dialog.closeAll();
window.location.reload()

})}
snackbar(){
  this._snackBar.open("Updated")
}

ngOnDestroy(): void {
  this.onDestroy$.next(true)
  this.onDestroy$.complete()
  
}

}
