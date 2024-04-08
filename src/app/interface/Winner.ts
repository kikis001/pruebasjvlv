import { User } from "./User";

export interface Winner {
  idRoom: {
    nameRoom: string,
  },
  WinnerTeamName: User[]
}
