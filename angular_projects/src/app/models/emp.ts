export class Emp {
    private id: number;
  private firstName: string;
  private lastName: string;
  private email:string;
  private salary: number;

  constructor(id: number, firstName: string, lastName: string,email:string, salary: number) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email=email;
    this.salary = salary;
  }
  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
  getYearlySalary(): number {
    return 12 * this.salary;
  }
}
