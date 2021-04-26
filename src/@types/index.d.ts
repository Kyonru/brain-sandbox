export interface IResource<T> {
  create(data: T): T;
  findMany(): T[];
}

export interface Movie {
  name: string;
  rating: number;
}
