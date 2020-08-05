export abstract class ApiRepository<T> {
  protected baseUrl: string;

  protected constructor(baseUrl?: string) {
    if (baseUrl != undefined) {
      this.baseUrl = baseUrl;
    } else {
      this.baseUrl = process.env.VUE_APP_API_URI;
    }
  }

  abstract getAll(): Promise<T[]>;
  abstract get(id: number): Promise<T>;
  abstract add(object: T): Promise<T>;
  abstract put(id: number, object: T): Promise<void>;
  abstract delete(id: number): Promise<void>;
}
