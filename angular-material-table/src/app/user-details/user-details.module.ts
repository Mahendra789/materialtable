import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';

import { CustomersRoutingModule } from './user-details-routing.module';
import { UserDetailsComponent } from './user-details.component';



@NgModule({
  declarations: [UserDetailsComponent],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    MatTableModule,
    MatIconModule
  ]
})
export class UserDetailsModule { }
