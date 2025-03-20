import {Component, OnInit} from '@angular/core';
import {User} from "./User.model";
import {UsersService} from "../users.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: false
})

export class HomePage implements OnInit {


  constructor(private user : UsersService, private router : Router) { }
  users : User[] = [];
  searchQuery : string = "";
  lastSearchQuery : string = "";

  ngOnInit(){
    this.user.fetchUsers();
    this.users = this.user.getUsers();
  }
  handleSearch() : void {
    this.users = this.user.getUsers();
    console.log(this.searchQuery);
    if (!this.searchQuery) {
      return;
    }
    {
      this.users = this.user.getUsers();
      this.users = this.users.filter((user) => {
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
    }
  }

  timeOutSearch() {
    setTimeout(() => this.handleSearch(),
    1350);
  }

  handleClick(id: number) {
    this.router.navigate([`/user/${id}`])
  }

  protected readonly String = String;
}
