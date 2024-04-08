export interface LoginUser {
  access_token: string;
  user: User
}

export interface User {
  nameTeam: string,
  _id: string,
  answers: number[],
  answersSubmitted: boolean,
  email: string,
  role: Role,
  score: number
}

export enum Role {
  ADMIN = "admin",
  ALUMNO = "alumno"
}

export interface RegisterUser {
  email: string,
  password: string,
  nameTeam: string,
}
