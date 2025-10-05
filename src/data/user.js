export default class User {
  constructor(userData) {
    this.id = userData.id;
    this.firstName = userData.firstName;
    this.lastName = userData.lastName;
    this.email = userData.email;
    this.phone = userData.phone;
    this.image = userData.image;
    this.role = userData.role;
    this.gender = userData.gender;

    this.city = userData.address?.city;

    this.company = userData.company?.name;
    this.position = userData.company?.title;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  get shortInfo() {
    return `${this.fullName} - ${this.position} at ${this.company}`;
  }

  toJSON() {
    return {
      id: this.id,
      fullName: this.fullName,
      email: this.email,
      phone: this.phone,
      city: this.city,
      company: this.company,
      position: this.position,
      role: this.role,
    };
  }

  // Для отладки - все поля
  toString() {
    return `User: ${this.fullName} (${this.email})`;
  }
}
