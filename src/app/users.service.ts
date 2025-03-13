import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "./home/User.model";

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  getUsers(): User[] {
    this.fetchUsers();
    return this.users;
  }

  constructor(private http: HttpClient) { }

  private users : User[] = [];
  fetchUsers() {
    this.http.get<any>('https://dummyjson.com/users').subscribe(res => {
      res.users.map((user : any) => {
        const isMale = user.gender == 'male';
        console.log(typeof user.gender);
        console.log(user.firstName + " " + user.gender);
        this.users.push({id: user.id, firstName: user.firstName, lastName: user.lastName, age: user.age, address : user.address, username: user.username, hair: user.hair, isMale: isMale});
        this.users.map(() => console.log(isMale));
      });
    });
  }
}
