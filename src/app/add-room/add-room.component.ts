import { Component, OnInit } from '@angular/core';
import {Room} from '../room';
import {RoomServiceService} from '../room-service.service';
import { Facility } from '../facility';

@Component({
  selector: 'app-add-room',
  templateUrl: './add-room.component.html',
  styleUrls: ['./add-room.component.css']
})
export class AddRoomComponent implements OnInit {
 // facility:Facility = [
  //  {id: 1, name: 'Python'},
  //  {id: 2, name: 'Node Js'},
  //  {id: 3, name: 'Java'},
  //  {id: 4, name: 'PHP', disabled: true},
   // {id: 5, name: 'Django'},
  //  {id: 6, name: 'Angular'},
 //   {id: 7, name: 'Vue'},
  //  {id: 8, name: 'ReactJs'},
  //];

  facility:any;
  
  room: Room=new Room(0,"","","");
  message:any; 
  constructor(private service:RoomServiceService) { }

  ngOnInit() {
    let resp=this.service.getFacilities();
    resp.subscribe((data)=>this.facility=data);
  }


  public registerNow(){
    let resp=this.service.doRegistration(this.room);
    resp.subscribe((data)=>this.message=data);
      }
}
