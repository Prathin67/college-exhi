import { Component,  OnInit } from '@angular/core';
import { FormBuilder,FormControl, FormGroup, Validators } from '@angular/forms';
import { SampleServiceService } from '../sample-service.service';
import { Country, State, City }  from 'country-state-city';
import { MatDialog } from '@angular/material/dialog';




@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css']
})
export class StepperComponent implements OnInit {

  

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
  
      // console.log(Country.getAllCountries())
  
  this.sixthFormGroup=new FormGroup({
  
    country:this.country,
  
    state:this.state
  
  
  })

  this.country.valueChanges.subscribe((d:any)=>{
  
    this.states=State.getStatesOfCountry(d.isoCode)
  
    console.log('----',d)
  
    console.log('----',this.states)
  
  
  })
  
    }

    form1(){
      console.log(this.firstFormGroup.value);
      
    }
    
    form2(){
      console.log(this.secondFormGroup.value);
      
    }
    
    form3(){
      console.log(this.thirdFormGroup.value);
      
    }
    
    form4(){
      console.log(this.fourthFormGroup.value);
      
    }
    form5(){
      console.log(this.fifthFormGroup.value)
    }
    
    form6(){
      // console.log(this.fifthFormGroup.value);
      this.service.createELEMENT({...this.firstFormGroup.value,...this.secondFormGroup.value,...this.thirdFormGroup.value,...this.fourthFormGroup.value,
      id:this.firstFormGroup.value['slno']}).subscribe(a =>{
        console.log('---',a);
      })
      this.dialog.closeAll()
      
    }



}





