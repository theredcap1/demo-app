import { Component, OnInit } from '@angular/core';
import {UsersService} from "../auth/users.service";
import {ActivatedRoute, Router} from "@angular/router";
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
  constructor(protected user : UsersService, private route : ActivatedRoute, private router : Router) { }
  private id : number = 0;
  ngOnInit() {
    this.route.paramMap.subscribe(params => this.id = parseInt(params.get('id') || ''));
    this.user.fetchUserDetails(this.id).subscribe((res : any) => this.userDetails = {...res, isMale: res.gender.toLowerCase() == 'male'});
  }

  alertButtons = [
    {
      text: 'Cancel',
      role: 'cancel',
      handler: () => {},
    },
    {
      text: 'Delete',
      role: 'destructive',
      handler: () => {
        this.delete();
      },
    }
  ];
  delete() {
    console.log("ya here fella?");
    this.user.deleteUser(this.id).subscribe(() => this.router.navigate(['home']));
    console.log("bruh");
  }
}
