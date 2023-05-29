export class GameData {
  constructor(
    public game: string,
    public year: number,
    public month: number,
    public date: string,
    public activeUsers: number
  ) {}
}
