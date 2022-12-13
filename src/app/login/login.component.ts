import { Component,OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { canActivate } from '../canActive';
import { SampleServiceService } from '../sample-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  formdata:any
  data:any
  onDestroy$= new Subject<boolean>()

  constructor(private router:Router,private _snackBar:MatSnackBar,private service:SampleServiceService){}
  ngOnInit(): void {
    this.formdata = new FormGroup({
      email:new FormControl(this.data?.email ?? ''),
      password: new FormControl(this.data?.password ?? '')
    });
    
    
    
  }
  openSnackBar(){
    this._snackBar.open('login successfull')
  }

  go(){
    this.router.navigate(['menu-cmp/'])
  }
  login(data:any){
    this.service.login(data).pipe(takeUntil(this.onDestroy$)).subscribe(() =>{
      
      this.service.setLoginStatus(true)
      localStorage.setItem('logged in' , 'true')
      localStorage.setItem('email',data.email)
      
      this.router.navigate(['/menu-cmp'])
     
    });
  }
  ngOnDestroy(): void {
    this.onDestroy$.next(true)
    this.onDestroy$.complete()
    
  }


  

}
