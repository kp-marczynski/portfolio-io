export interface ISkillGroup {
  groupName: string;
  skills: string[];
}

export class SkillGroup implements ISkillGroup {

  constructor(public groupName: string, public skills: string[]) {
  }
}
