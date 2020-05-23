export interface ILink {
  displayName: string;
  hrefLink: string;
}

export class Link implements ILink {
  constructor(
    public displayName: string,
    public hrefLink: string
  ) {
  }
}
