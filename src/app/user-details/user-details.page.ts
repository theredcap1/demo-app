import { Component, OnInit } from '@angular/core';
import {UsersService} from "../users.service";
import {ActivatedRoute} from "@angular/router";
import {User} from "../home/User.model";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.page.html',
  styleUrls: ['./user-details.page.scss'],
  standalone: false
})
export class UserDetailsPage implements OnInit {

  protected userDetails: User = {
    address: {address: "", city: "", stateCode: ""},
    age: 0,
    firstName: "",
    hair: {color: "", type: ""},
    id: 0,
    isMale: false,
    key: 0,
    lastName: "",
    username: "",
    maidenName: "",
    email: "",
    height: 0,
    weight: 0,
    company: {name: "", title: "", department: ""},
    university: "",
    image: "",
  }
  constructor(protected user : UsersService, private route : ActivatedRoute) { }
  private id : number = 0;
  ngOnInit() {
    this.route.paramMap.subscribe(params => this.id = parseInt(params.get('id') || ''));
    console.log(this.id);
    this.user.fetchUserDetails(this.id).subscribe(res => this.userDetails = res);
    console.log(this.userDetails);
  }

}
