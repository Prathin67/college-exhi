import { Component,OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
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

  constructor(private router:Router,private _snackBar:MatSnackBar,private service:SampleServiceService){}
  ngOnInit(): void {
    this.formdata = new FormGroup({
      email:new FormControl(this.data?.email ?? ''),
      password: new FormControl(this.data?.password ?? '')
    });
    console.log('--',this.data)
    
    
  }
  openSnackBar(){
    this._snackBar.open('login successfull')
  }

  go(){
    this.router.navigate(['menu-cmp/'])
  }
  login(data:any){
    this.service.login(data).subscribe(d =>{
      console.log('---',d)
      this.service.setLoginStatus(true)
      localStorage.setItem('logged in' , 'true')
      localStorage.setItem('email',data.email)
       console.log(localStorage.getItem('logged in '))
      this.router.navigate(['/menu-cmp'])
     
    });
  }

  // reg(){
  //   this.router.navigate(['stepper/'])
  // }

}
