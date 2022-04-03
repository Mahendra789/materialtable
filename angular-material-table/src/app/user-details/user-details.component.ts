import { Component, OnInit } from '@angular/core';
import { UserDetailService } from './service/user-details.service';
import { UserDetails } from './model/user-details.model'
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})

export class UserDetailsComponent implements OnInit {
  private _subscriptions = new Subscription();
  constructor(
    private _userDetailsService: UserDetailService
  ) { }

  ngOnInit(): void {
    this._getUserDetails();
  }

  tableheaders: string[] = ['tsID', 'name', 'email', 'location', 'gender'];
  tableData: Array<UserDetails> = new Array<UserDetails>();

  // Subsribe on getUserDetails method of UserDetailsService to get the user details
  private _getUserDetails(): void {
    this._subscriptions = this._userDetailsService.getUserDetails().subscribe((res: any) => {
      this.tableData = res[0];
      this._validateEmail();
    });
  }

  // validate email id for all the users
  private _validateEmail() {
    this.tableData.map(x => {
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(x.email)) {
        x.isValidEmail = true;
        return x;
      } else {
        x.isValidEmail = false;
        return x;
      }
    });
  }

  ngDestory() {
    this._subscriptions.unsubscribe();
  }
}
