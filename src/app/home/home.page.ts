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

  ngOnInit(){
    this.users = this.user.getUsers();
  }
}
