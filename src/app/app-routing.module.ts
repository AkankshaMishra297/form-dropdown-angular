import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddRoomComponent } from './add-room/add-room.component';
import { ViewRoomComponent } from './view-room/view-room.component';
import { EditRoomComponent } from './edit-room/edit-room.component';



const routes: Routes = [
  {path:"addRoom",component:AddRoomComponent},
  {path:"viewRoom",component:ViewRoomComponent},
  {path:"editRoom",component:EditRoomComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
