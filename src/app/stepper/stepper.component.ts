import { Component,  OnInit } from '@angular/core';
import { FormBuilder,FormControl, FormGroup, Validators } from '@angular/forms';
import { SampleServiceService } from '../sample-service.service';
import { Country, State, City }  from 'country-state-city';
import { MatDialog } from '@angular/material/dialog';
import { Subject, takeUntil } from 'rxjs';




@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css']
})
export class StepperComponent implements OnInit {

  onDestroy$= new Subject<boolean>()

  states:any

  firstFormGroup = this._formBuilder.group({
  
    slno: ['', Validators.required],

    

  });

  

  secondFormGroup = this._formBuilder.group({
  
      name: ['', Validators.required],
  
      email:['', Validators.required],
  
    });
  
    thirdFormGroup = this._formBuilder.group({
  
      class: ['', Validators.required],
  
    });
  
    fourthFormGroup = this._formBuilder.group({
  
      topic: ['', Validators.required],
  
    });
  
   fifthFormGroup = this._formBuilder.group({
  
      skills: ['', Validators.required],
  
    });
  
    sixthFormGroup:any
  
    country=new FormControl(null,Validators.required)
  
    state= new FormControl(null, Validators.required )
  
   countries:any
  
  
   constructor(private _formBuilder: FormBuilder, private service: SampleServiceService,private dialog:MatDialog) {}
  
  
   ngOnInit(): void {
  
     this.countries=Country.getAllCountries()
  
     
  
  this.sixthFormGroup=new FormGroup({
  
    country:this.country,
  
    state:this.state
  
  
  })

  this.country.valueChanges.pipe(takeUntil(this.onDestroy$)).subscribe((d:any)=>{
  
    this.states=State.getStatesOfCountry(d.isoCode)
  
    
  
  })
  
    }

    form1(){
     
      
    }
    
    form2(){
   
      
    }
    
    form3(){
    
      
    }
    
    form4(){
   
      
    }
    form5(){
      
    }
    
    form6(){
     
      this.service.createELEMENT({...this.firstFormGroup.value,...this.secondFormGroup.value,...this.thirdFormGroup.value,...this.fourthFormGroup.value,
      id:this.firstFormGroup.value['slno']}).pipe(takeUntil(this.onDestroy$)).subscribe(a =>{
       
      })
      this.dialog.closeAll()
      
    }
    ngOnDestroy(): void {
      this.onDestroy$.next(true)
      this.onDestroy$.complete()
      
    }
  



}





