import {Component, OnInit} from '@angular/core';
import {User} from "./User.model";
import {UsersService} from "../users.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: false


})

export class HomePage implements OnInit {


  constructor(private user : UsersService) { }
  users : User[] = [];
  searchQuery : string = "";
  lastSearchQuery : string = "";

  ngOnInit(){
    this.user.fetchUsers();
    this.users = this.user.getUsers();
  }
  handleSearch() {
    console.log(this.searchQuery);

    if (!this.searchQuery) {
      return;
    }
    this.users = this.user.getUsers();
    console.log("allUsers",this.users);
    this.users = this.users.filter((user) => {
      console.log("we out here");
      const fields = [
        user.firstName.toLowerCase(),
        user.lastName.toLowerCase(),
        user.address.address.toLowerCase(),
        user.address.city.toLowerCase(),
        user.address.stateCode.toLowerCase(),
      ];
      return fields.some((field) => field.includes(this.searchQuery.trim().toLowerCase()));
    });
    this.lastSearchQuery = this.searchQuery;
    console.log("this.users after", this.users);
    return this.users;
  }
}
