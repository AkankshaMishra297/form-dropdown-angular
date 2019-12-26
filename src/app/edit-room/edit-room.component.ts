import { Component, OnInit } from '@angular/core';
import { RoomServiceService } from '../room-service.service';
import{Router}  from '@angular/router';
import { Room } from '../room';
import { Facility } from '../facility';

@Component({
  selector: 'app-edit-room',
  templateUrl: './edit-room.component.html',
  styleUrls: ['./edit-room.component.css']
})
export class EditRoomComponent implements OnInit {

  private room:Room
  private facility:Facility

  constructor(private roomService:RoomServiceService,private _rotuer:Router) { }

  ngOnInit() {
    this.room=this.roomService.getter();
    let resp=this.roomService.getFacilities();
    resp.subscribe((data)=>this.facility=data);
  }

  processForm(){
    //let resp=this.roomService.editRoom(this.room);
    let resp=this.roomService.doRegistration(this.room);


    resp.subscribe((data)=>this.room=data);  
    this._rotuer.navigate(['/viewRoom']);

   
  }

}

