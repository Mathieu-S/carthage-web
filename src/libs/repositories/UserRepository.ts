import axios from "axios";
import { Injectable } from "@vue-ioc/core";
import { User } from "@/libs/models/User";
import { ApiRepository } from "./ApiRepository";

@Injectable()
export class UserRepository extends ApiRepository<User> {
  constructor() {
    super();
  }

  public async getAll(): Promise<User[]> {
    let users!: User[];

    try {
      const response = await axios.get<Array<User>>(`${this.baseUrl}/users`);
      users = response.data;
    } catch (error) {
      console.error(error);
    }

    return users;
  }

  public async get(id: number): Promise<User> {
    let user!: User;

    try {
      const response = await axios.get<User>(`${this.baseUrl}/users/${id}`);
      user = response.data;
    } catch (error) {
      throw new Error(error);
    }

    return user;
  }

  public async add(object: User): Promise<User> {
    let user!: User;

    try {
      const response = await axios.post<User>(`${this.baseUrl}/users`, object);
      user = response.data;
    } catch (error) {
      throw new Error(error);
    }

    return user;
  }

  public async put(id: number, object: User): Promise<void> {
    try {
      await axios.put(`${this.baseUrl}/users/${id}`, object);
    } catch (error) {
      throw new Error(error);
    }
  }

  public async delete(id: number): Promise<void> {
    try {
      await axios.delete(`${this.baseUrl}/users/${id}`);
    } catch (error) {
      throw new Error(error);
    }
  }
}
