export interface IPortfolioProject {
  name: string;
  date: string;
  imageUrl: string;
  technologies: string[];
  description: string;
  repoUrl: string;
}

export class PortfolioProject implements IPortfolioProject {

  constructor(
    public name: string,
    public date: string,
    public imageUrl: string,
    public technologies: string[],
    public description: string,
    public repoUrl: string
  ) {
  }
}
