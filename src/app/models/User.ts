export class Category {
  id!: number;
  firstname!: string;
  lastname!: string;
  email!: string;
  roles!: any[];


  constructor(
    firstname: string = '',
    lastname: string = '',
    email: string = '',
    roles: any[] = [],
  ) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
    this.roles = roles
  }
}
