import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, from, Observable, Subject } from 'rxjs';
import { cards, ELEMENT_DATA } from './model';



@Injectable({
  providedIn: 'root'
})
export class SampleServiceService {

 private loggedin :BehaviorSubject<boolean>=new BehaviorSubject(JSON.parse( localStorage.getItem('logged in')??'false'));
  loggedIn$ =this.loggedin.asObservable()
  
  
 

  fromService = 'This is from service'
  
  private message = new BehaviorSubject<string>('default message')
  getMessage = this.message.asObservable();

  private dataSubject$: Subject<ELEMENT_DATA[]>= new Subject();
  dataEvent$ = this.dataSubject$.asObservable();

  API_URL = 'http://localhost:3000/ELEMENT_DATA';

  login_url ='https://reqres.in/api/login'

  card_url = ' http://localhost:3000/cards'

  political_url = 'http://localhost:3000/political'

  paper_url = 'http://localhost:3000/paper'

  Science_url ='  http://localhost:3000/Science'
  

  constructor(private http :HttpClient) { }

  data:ELEMENT_DATA[]=[]

 getScience():Observable<cards[]>{
  return this.http.get<cards[]>(this.Science_url)
 }

  getPaper():Observable<cards[]>{
    return this.http.get<cards[]>(this.paper_url)
  }

  getPolitical():Observable<cards[]>{
    return this.http.get<cards[]>(this.political_url)
  }

  getcards(){
    return this.http.get(this.card_url)
  }

  updateMessage(msg:string){
    console.log('--msg--',msg);
    this.message.next(msg)
    
  }

  getELEMENT_DATA(){
     this.http.get(this.API_URL).subscribe((val:any) =>{
      this.dataSubject$.next(val);
      this.data = val
    })
  }
  createELEMENT(data:any):Observable<any> {
    console.log('--data--',data);
    return this.http.post(this.API_URL,data);

  }
  deleteELEMENT_DATA(id:any):Observable<any>{
    return this.http.delete(`${this.API_URL}/${id}`);
  }
  editELEMENT_DATA(data:any):Observable<any>{
    return this.http.put(`${this.API_URL}/${data.slno}`,data);
  }

  getDetails(id:any){
    return this.http.get(`${this.API_URL}/${id}`)
  }

  login(data:any):Observable<any>{
    
    return this.http.post('https://reqres.in/api/login',data)

  }
  updatewish(data:any){
    const newData={
      ...data,
      wishlist:!data.wishlist
    }
    return this.http.put(`${this.API_URL}/${data.id}`,newData);
  }
  setLoginStatus(value:any){
    console.log('---',localStorage.getItem('logged in'))
    this.loggedin.next(value)
  }
  searchData(value:any){

    this.dataSubject$.next(this.data.filter((val:any) => val.name.toLowerCase().includes(value.toLowerCase())))

  
  }
  
  
  // getUsers(){
  //   return this.http.get('https://reqres.in/api/users?page=2')
  // }
}



