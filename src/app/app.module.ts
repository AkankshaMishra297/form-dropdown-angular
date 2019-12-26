import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddRoomComponent } from './add-room/add-room.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgSelectModule } from '@ng-select/ng-select';
import { ViewRoomComponent } from './view-room/view-room.component';
import { EditRoomComponent } from './edit-room/edit-room.component';



@NgModule({
  declarations: [
    AppComponent,
    AddRoomComponent,
    ViewRoomComponent,
    EditRoomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgSelectModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
