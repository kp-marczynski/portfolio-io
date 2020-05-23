import {ILink} from './link.model';

export interface IContactInfo {
  description: string;
  links: ILink[];
  faIcon: string[];
}

export class ContactInfo implements IContactInfo {
  constructor(
    public description: string,
    public links: ILink[],
    public faIcon: string[]
  ) {
  }
}
