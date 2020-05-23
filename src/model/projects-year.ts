import {IPortfolioProject} from './portfolio-project.model';

export interface IProjectsYear {
  year: number;
  projects: IPortfolioProject[];
}

export class ProjectsYear implements IProjectsYear {
  constructor(
    public year: number,
    public projects: IPortfolioProject[]) {
  }
}
