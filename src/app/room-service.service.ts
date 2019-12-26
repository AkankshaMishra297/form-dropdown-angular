import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Room } from './room';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';



@Injectable({
  providedIn: 'root'
})
export class RoomServiceService {

  private room = new Room(0,"","","");


  constructor(private http:HttpClient) { }

  public doRegistration(room){
    return this.http.post("http://localhost:9090/register",room,{responseType:'text' as 'json'});
  }

  public getFacilities(){
    return this.http.get("http://localhost:9090/getFacilities");
  }


  public getRooms(){
    return this.http.get("http://localhost:9090/getAllRooms")
                    .catch(this.errorHandler);
  }

  errorHandler(error:HttpErrorResponse){
    return Observable.throw(error.message || "server error");
  }

  public deleteRoom(id){
    return this.http.delete("http://localhost:9090/cancel/"+id);
  }


  
  public editRoom(room){
    return this.http.post("http://localhost:9090/register",room,{responseType:'text' as 'json'});
  }




  setter(room:Room){
    this.room=room;
  }

 getter(){
   return this.room;
 }


}
