import { Component, OnInit } from '@angular/core';

import { UserService } from '../../services/user.service';
import { User } from "../../common/User";
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {




  users: any = [];



  constructor(private userService: UserService) { }
totalLength: any;
page: number =1;
  ngOnInit(): void {
    this.retrieveUsers();
    this.totalLength= this.users.length;

  }

  retrieveUsers(): void {


    this.userService.getAll()
      .subscribe(
        (data: any) => {
          this.users = data;
          console.log(this);
        },
        (error: any) => {
          console.log(error);
        });
  }
  deleteUserById(id: any): void {

    this.userService.deleteUserById(id)
      .subscribe(
        (data: any) => {
          console.log(data);
          this.retrieveUsers();
        },
        (error: any) => {
          console.log(error);
        }
      );

  }

}
