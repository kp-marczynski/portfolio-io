import {Component} from '@angular/core';
import {RepositoryService} from '../service/repository.service';
import {IPersonalInfo} from '../model/personal-info.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private repo: RepositoryService) {
    const personalInfo: IPersonalInfo = repo.getPersonalInfo();
    document.title = 'Portfolio ' + personalInfo.lastName + ' ' + personalInfo.firstName + ' - ' + personalInfo.longPositionName;
    // + ' - ' + new Date().toJSON().slice(0, 10);
  }
}
