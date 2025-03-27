import { Component, OnInit } from '@angular/core';
import {UsersService} from "../auth/users.service";
import {ActivatedRoute} from "@angular/router";
import {User} from "../home/User.model";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { Location } from "@angular/common"

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.page.html',
  styleUrls: ['./edit-user.page.scss'],
  standalone: false
})
export class EditUserPage implements OnInit {

  constructor(private userService : UsersService, private route : ActivatedRoute, protected location: Location) { }
  isString= [Validators.pattern('^[A-Z*a-z ]*$')]
  protected user = new User(0, "", "", 0, {address: "", city: "", stateCode: ""}, "", {color: "", type: ""}, false, 0, "", "", "", 0, 0, {department: "", name: "", title: ""}, "");
  editForm = new FormGroup({
    firstName: new FormControl('', this.isString),
    lastName: new FormControl('', this.isString),
    username: new FormControl('', [Validators.pattern("^[A-Z*a-z0-9_ ]*$")]),
    address: new FormControl('', [Validators.pattern("^[A-Z*a-z0-9 ]*$")]),
    city: new FormControl('', this.isString),
    stateCode: new FormControl('', Validators.pattern("^[A-Z]{2}$")),
    university: new FormControl('', this.isString),
    email: new FormControl('', [Validators.email]),
    compName: new FormControl('', [Validators.pattern('[A-Z]')]),
    compDep: new FormControl('', this.isString),
    compTitle: new FormControl('', this.isString)
  });
  ngOnInit() {
    this.route.params.subscribe((value) => {
      const id: number = value['id'];
      this.userService.fetchUserDetails(id).subscribe((data) => {
        this.user = {...data};
        console.log(this.user);
      });
    });

  }


  handleSubmit() {

    if (!this.editForm.value.city && !this.editForm.value.address && !this.editForm.value.email && !this.editForm.value.stateCode && !this.editForm.value.university || this.editForm.invalid) {
      return alert("Please check your data and try again");
    }
    console.log(this.editForm.value);
    const {email, university, address, stateCode, city, firstName, lastName} = this.editForm.value;

    const data = {
      firstName,
      lastName,
      email,
      university,
      address: {
        address: address == "" ? this.user.address.address : address,
        stateCode: stateCode == "" ? this.user.address.stateCode : stateCode,
        city: city == "" ? this.user.address.city : city
      }
    }


    this.userService.updateUser(this.user.id, data).subscribe(
      {
        next: (res) =>
          {
            alert("Successfully updated!");
            console.log(res);
          },
        error: (error) => console.error(error)
      },
    );
  }
}
