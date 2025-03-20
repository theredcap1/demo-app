import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "./home/User.model";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  getUsers(): User[] {
    return this.users;
  }

  constructor(private http: HttpClient) { }

  private users : User[] = [];
  fetchUsers() {
    this.http.get<any>('https://dummyjson.com/users').subscribe(res => {
      res.users.map((user : any) => {
        const isMale = user.gender == 'male';
        this.users.push({id: user.id, firstName: user.firstName, lastName: user.lastName, age: user.age, address : user.address, username: user.username, hair: user.hair, isMale: isMale, key: user.id});
      });
    });
    console.log("this.users from service", this.users);
  }
}
