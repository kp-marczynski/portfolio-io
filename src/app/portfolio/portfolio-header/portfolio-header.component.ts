import {Component, OnInit} from '@angular/core';
import {IPersonalInfo} from '../../../model/personal-info.model';
import {LinkShortenerService} from '../../../service/link-shortener.service';
import {RepositoryService} from '../../../service/repository.service';
import {ISkillGroup} from '../../../model/skill-group.model';

@Component({
  selector: 'app-portfolio-header',
  templateUrl: './portfolio-header.component.html',
  styleUrls: ['./portfolio-header.component.scss']
})
export class PortfolioHeaderComponent implements OnInit {

  portfolioUrl: string;
  personalInfo: IPersonalInfo;
  coreSkills: ISkillGroup;

  constructor(public linkShortenerService: LinkShortenerService, private repo: RepositoryService) {
    this.portfolioUrl = repo.getAllContactInfo().find(elem => elem.description === 'github').links[0].hrefLink;
    this.personalInfo = repo.getPersonalInfo();
    this.coreSkills = repo.getCoreSkills();
  }

  ngOnInit() {
  }

}
