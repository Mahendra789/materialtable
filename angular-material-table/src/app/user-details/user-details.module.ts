import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';

import { UserDetailsRoutingModule } from './user-details-routing.module';
import { UserDetailsComponent } from './user-details.component';



@NgModule({
  declarations: [UserDetailsComponent],
  imports: [
    CommonModule,
    UserDetailsRoutingModule,
    MatTableModule,
    MatIconModule
  ]
})
export class UserDetailsModule { }
