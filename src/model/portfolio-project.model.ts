export interface IPortfolioProject {
  name: string;
  date: string;
  imageUrl: string;
  technologies: string[];
  description: string;
  repoUrl: string;
  isPrivate?: boolean;
}

export class PortfolioProject implements IPortfolioProject {

  constructor(
    public name: string,
    public date: string,
    public imageUrl: string,
    public technologies: string[],
    public description: string,
    public repoUrl: string,
    public isPrivate?: boolean
  ) {
  }
}
