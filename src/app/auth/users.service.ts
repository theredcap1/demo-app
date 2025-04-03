import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../home/User.model";
import {ToastController} from "@ionic/angular";


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  async presentToast(toastMessage: string) {
    const toast = await this.toastController.create({
      message: toastMessage,
      duration: 2000
    });
    await toast.present();
  }

  getUsers(): User[] {
    return this.users;
  }

  constructor(private http: HttpClient, private toastController: ToastController) { }

  private users : User[] = [];

  fetchUserDetails(id: number) {
    return (this.http.get<any>('https://dummyjson.com/users/' + id));
  }

  fetchUsers() {
    this.http.get<any>('https://dummyjson.com/users').subscribe(res => {
      res.users.map((user : any) => {
        this.users.push({
          ...user,
          isMale: user.gender.toLowerCase() == 'male',
          hair: {
            color: user.hair.color.toLowerCase(),
            type: user.hair.type.toLowerCase()
          }
        });
      });
    });
  }
  updateUser(id: number, data: any) {
    return this.http.put<any>('https://dummyjson.com/users/' + id, data);
  }

  deleteUser(id: number) {
    this.presentToast("Successfully deleted!");
    return this.http.delete<any>('https://dummyjson.com/users/' + id);
  }
}
