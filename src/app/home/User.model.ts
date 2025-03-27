import {image, key} from "ionicons/icons";

export class User {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  address = {
    address: "",
    city: "",
    stateCode: "",
  };
  username: string = "";
  hair: {
    color: string,
    type: string;
  };
  isMale: boolean;
  key: number;
  maidenName: string = "";
  university : string = "";
  email : string = "";
  height : number = 0;
  weight : number = 0;
  company : {
    department: string,
    name: string,
    title: string
  } = {
    department: "",
    name: "",
    title: ""
  }
  image: string = "";

  constructor(id: number, firstName: string, lastName: string, age: number, address: {
    address: string;
    city: string;
    stateCode: string
  }, username: string, hair: {
    color: string;
    type: string
  }, isMale: boolean, key: number, maidenName: string, university: string, email: string, height: number, weight: number, company: {
    department: string;
    name: string;
    title: string
  }, image: string) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.address = address;
    this.username = username;
    this.hair = hair;
    this.isMale = isMale;
    this.key = key;
    this.maidenName = maidenName;
    this.university = university;
    this.email = email;
    this.height = height;
    this.weight = weight;
    this.company = company;
    this.image = image;
  }
}
