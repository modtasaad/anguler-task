import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DemoService {

  constructor( private myclinet:HttpClient) { }
 
 private Base_Url=" http://localhost:3000/students";

getallusers(){
  return this.myclinet.get(this.Base_Url);
}
getuserbyid(id:any){
  return this.myclinet.get(this.Base_Url+"/"+id);
}
adduser(user:any){
  return this.myclinet.post(this.Base_Url,user);
}
// updateuser(id:any,updteduser:any){
//   return this.myclinet.put(this.Base_Url+"/"+id,updteduser);
// }
}

