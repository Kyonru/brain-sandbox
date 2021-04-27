export interface IResource<T> {
  create(data: T): T;
  findMany(): T[];
}

export interface Movie {
  name: string;
  rating: number;
}

export interface ProcessEnv {
  [key: string]: string | undefined;
}

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      GITHUB_AUTH_TOKEN: string;
      NODE_ENV: 'development' | 'production';
      DB_PASS: string;
      DB_NAME: string;
      DB_PORT: number;
      DB_PROVIDER: string;
      DB: string;
      DB_USER: string;
      DB_USER_PASS: string;
    }
  }
}
