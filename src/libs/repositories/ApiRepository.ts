import { Injectable } from "@vue-ioc/core";

@Injectable()
export abstract class ApiRepository<T> {
  protected readonly baseUrl: string;

  constructor() {
    this.baseUrl = process.env.VUE_APP_API_URI;
  }

  abstract getAll(): Promise<T[]>;
  abstract get(id: number): Promise<T>;
  abstract add(object: T): Promise<T>;
  abstract put(id: number, object: T): Promise<void>;
  abstract delete(id: number): Promise<void>;
}
