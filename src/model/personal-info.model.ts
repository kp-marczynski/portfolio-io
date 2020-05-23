export interface IPersonalInfo {
  firstName: string;
  lastName: string;
  shortPositionName: string;
  longPositionName: string;
  personalStatement?: string;
}

export class PersonalInfo implements IPersonalInfo {
  constructor(
    public firstName: string,
    public lastName: string,
    public shortPositionName: string,
    public longPositionName: string,
    public personalStatement?: string
  ) {
  }
}
