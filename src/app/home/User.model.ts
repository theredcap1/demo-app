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
  } = {
    color: "",
    type: ""
  }
  isMale: boolean;
  key: number;

  constructor(id: number, firstName: string, lastName: string, age: number, address: any, username : string, hair: {color: string, type: string}, isMale: boolean) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.address = address;
    this.username = username;
    this.hair = hair;
    this.isMale = isMale;
    this.key = id;
  }
}
