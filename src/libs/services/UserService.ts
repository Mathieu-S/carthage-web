import { User } from "@/libs/models/User";

export class UserService {
  public static getById(users: User[], id: number): User {
    const user = users.find(u => u.id === id);
    if (user !== undefined) {
      return user;
    } else {
      throw Error(`The user with id: "${id}" was not find.`);
    }
  }

  public static getByName(users: User[], name: string): User {
    const user = users.find(u => u.name === name);
    if (user !== undefined) {
      return user;
    } else {
      throw Error(`The user with name: "${name}" was not find.`);
    }
  }

  public static getByEmail(users: User[], email: string): User {
    const user = users.find(u => u.email === email);
    if (user !== undefined) {
      return user;
    } else {
      throw Error(`The user with email: "${email}" was not find.`);
    }
  }

  public static addUser(users: User[], user: User): User[] {
    users.push(user);
    return users;
  }

  public static removeUserById(users: User[], id: number): User[] {
    return users.filter(u => u.id !== id);
  }

  public static editUser(users: User[], user: User): User[] {
    let modifiedUser = this.getById(users, user.id);
    users = this.removeUserById(users, modifiedUser.id);
    modifiedUser = user;
    this.addUser(users, modifiedUser);
    return users;
  }
}
