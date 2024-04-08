import { User } from "./User"

export interface Room {
  _id: string
  nameRoom: string,
  quiz: Quiz,
  teams: User[],
  winnerTeamId: User[],
  scoreMax: number,
  numberOfMembers: number
}

export interface Quiz {
  questions: string[],
  options: string[][],
  correctAnswers: number[]
}


