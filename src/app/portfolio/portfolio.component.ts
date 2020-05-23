import {Component, OnInit} from '@angular/core';
import {IPortfolioProject, PortfolioProject} from '../../model/portfolio-project.model';
import {LinkShortenerService} from '../../service/link-shortener.service';
import {RepositoryService} from '../../service/repository.service';
import {IProjectsYear} from '../../model/projects-year';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  projectsYears: IProjectsYear[];

  constructor(public linkShortenerService: LinkShortenerService, private repo: RepositoryService) {
    this.projectsYears = repo.getAllPortfolioProjects();
    this.projectsYears.sort((a, b) => b.year - a.year);
  }

  ngOnInit() {
  }
}
