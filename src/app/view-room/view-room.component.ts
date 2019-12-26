import { Component, OnInit } from '@angular/core';
import { RoomServiceService } from '../room-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-room',
  templateUrl: './view-room.component.html',
  styleUrls: ['./view-room.component.css']
})
export class ViewRoomComponent implements OnInit {

  rooms:any;
  errorMsg:any;

  constructor(private roomService:RoomServiceService,private _router:Router) { }

  ngOnInit() {
    let resp=this.roomService.getRooms();
    resp.subscribe((data)=>this.rooms=data,
    error=>this.errorMsg=error
    );

  }

  editRoom(room){  
    this.roomService.setter(room);
    this._router.navigate(['/editRoom']);


  }

  deleteRoom(id:number){
    let resp=this.roomService.deleteRoom(id);
    resp.subscribe((data)=>this.rooms=data);
  }

  

}
