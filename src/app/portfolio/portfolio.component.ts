import {Component, OnInit} from '@angular/core';
import {IPortfolioProject, PortfolioProject} from '../../model/portfolio-project.model';
import {LinkShortenerService} from '../../service/link-shortener.service';
import {RepositoryService} from '../../service/repository.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  itemsPerPage = 9;

  projects: IPortfolioProject[];

  constructor(public linkShortenerService: LinkShortenerService, private repo: RepositoryService) {
    this.projects = repo.getAllPortfolioProjects();
  }

  ngOnInit() {
  }

  getNumberOfPages(): number[] {
    return [...Array(Math.ceil((this.projects.length + 1) / this.itemsPerPage)).keys()];
  }

  getProjectsForPage(pageNumber: number): IPortfolioProject[] {
    let itemsOnCurrentPage = this.itemsPerPage;
    let position = pageNumber * this.itemsPerPage;
    if (pageNumber === 0) {
      itemsOnCurrentPage--;
    } else {
      position--;
    }
    return this.projects.slice(position, position + itemsOnCurrentPage > this.projects.length ? this.projects.length : position + itemsOnCurrentPage);
  }
}
