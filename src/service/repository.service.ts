import {Injectable} from '@angular/core';
import {ContactInfo, IContactInfo} from '../model/contact-info.model';
import {IPersonalInfo, PersonalInfo} from '../model/personal-info.model';
import {IPortfolioProject, PortfolioProject} from '../model/portfolio-project.model';
import {ISkillGroup, SkillGroup} from '../model/skill-group.model';
import {Link} from '../model/link.model';
import * as moment from 'moment';
import {IProjectsYear, ProjectsYear} from '../model/projects-year';

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {

  constructor() {
  }

  getPersonalInfo(): IPersonalInfo {
    return new PersonalInfo('Krzysztof', 'Marczyński', 'Fullstack Developer', 'Fullstack Java/Kotlin/Angular Developer');
  }

  getCoreSkills(): ISkillGroup {
    return new SkillGroup('Core', ['Java', 'Kotlin', 'Spring', 'Angular', 'SQL']);
  }

  getAllContactInfo(): IContactInfo[] {
    return [
      new ContactInfo('location', [
          new Link('Wrocław', 'http://maps.google.com/?q=Wrocław,+Polska'),
          // new Link('Gdańsk', 'http://maps.google.com/?q=Gdańsk,+Polska')
        ], ['fas', 'home']
      ),
      new ContactInfo(
        'phone', [new Link('(+48) 669 673 391', 'tel:+48669673391')], ['fas', 'phone']
      ),
      new ContactInfo(
        'email', [new Link('kp.marczynski@gmail.com', 'mailto:kp.marczynski@gmail.com')], ['fas', 'envelope']
      ),
      new ContactInfo(
        'github', [new Link('github.com/kp-marczynski', 'https://github.com/kp-marczynski')], ['fab', 'github']
      )/*,
    new ContactInfo(
      'linkedin', [new Link('linkedin.com/in/kp-marczynski', 'https://linkedin.com/in/kp-marczynski')], ['fab', 'linkedin-in']
    )*/
    ];
  }

  getAllPortfolioProjects(): IProjectsYear[] {
    return [
      new ProjectsYear(
        2020,
        [
          new PortfolioProject(
            'Barcode Parser',
            '2020',
            'undraw_task_31wc.svg',
            ['Kotlin', 'Android library'],
            'Android library for extracting data from barcodes',
            'https://github.com/kp-marczynski/barcode-parser'
          ),
          new PortfolioProject('Resume.io & Portfolio.io', '2020', 'undraw_online_cv_qy9w.svg',
            ['Angular', 'HTML', 'SCSS', 'Bootstrap'],
            'Web based resume and portfolio designed to automatically provide aesthetically pleasing printable layout for given data. Because of personal data, only portfolio is publicly available',
            'https://github.com/kp-marczynski/portfolio-io'),
          new PortfolioProject('Ionic Songbook', '2020', 'undraw_listening_1u79.svg',
            ['Angular', 'Ionic', 'IndexedDB', 'Firebase OAuth', 'Firebase Hosting', 'Firestore', 'PWA', 'SCSS'],
            'Songbook developed as a hybrid web app. The first application on the market to offer sharing ' +
            '(and automatic refreshing after change) of the song currently played by the guitarist to all campfire participants.',
            'https://github.com/kp-marczynski/songbook'),
          new PortfolioProject(
            'Smarthome',
            '2020',
            'undraw_smart_home_28oy.svg',
            ['Firebase', 'ESP8266', 'Arduino', 'OAuth', 'Auth0', 'Cloud functions', 'Angular'],
            'System for managing smart home devices based on ESP8266 board via Firebase and webapp with OAuth authentication.',
            'https://github.com/kp-marczynski/smarthome'
          ),
          new PortfolioProject(
            'LaTeX Bachelor Thesis',
              '2020',
              'undraw_learning_2q1h.svg',
              ['LaTeX'],
              'Contribution to template of bachelor thesis for Wroclaw University of Technology.',
              'https://github.com/kp-marczynski/praca_inzynierska_latex'
          )
        ]
      ),
      new ProjectsYear(
        2019,
        [
          new PortfolioProject('Dietify', '2019', 'undraw_cookie_love_ulvn.svg',
            ['Java', 'Spring', 'Angular', 'Netflix OSS', 'PostgreSQL', 'Liquibase', 'Gradle', 'Docker', ' Gitlab CI/CD', 'JHipster'],
            'Diet management system based on microservice architecture designed for my bachelor thesis. ' +
            'Created solution can be used by dietitians in order to conduct comprehensive service of the patient’s visit with particular ' +
            'emphasis on designing the meal plans and sharing them with patients.',
            'https://github.com/kp-marczynski/dietify'),
          new PortfolioProject('Hitchwiki POI', '2019', 'undraw_directions_x53j.svg',
            ['Angular', 'Ionic', 'PWA', 'Bootstrap', 'Github Pages', 'SCSS'],
            'Hitchhiker companion app with geolocated "hitchability" points gathered via ' +
            'the Hitchwiki API optimized for offline and low bandwidth usage. ' +
            'Application is deployed online and has been successfully used by many users in real life situations.',
            'https://github.com/kp-marczynski/hitchwiki-poi'),
          new PortfolioProject('Nine Mens Morris', '2019', 'undraw_old_day_6x25.svg',
            ['Angular', 'PWA', 'Alpha-Beta Pruning Algorithm', 'Minimax Algorithm', 'Material Design', 'Github Pages'],
            'A nine men\'s morris game where player can play against another human or one of two AI algorithms: ' +
            'alpha-beta pruning and minimax.',
            'https://github.com/kp-marczynski/si-nine-mens-morris'),
          new PortfolioProject('Traveling Thief Problem', '2019', 'undraw_airport_2581.svg',
            ['Java', 'Gradle', 'JUnit', 'Genetic Algorithm', 'Traveling Salesman Problem', 'Knapsack Problem'],
            'App for solving the "traveling thief" problem (which is a composition of traveling salesman and knapsack problems) ' +
            'using a genetic algorithm. The effectiveness of various hyperparameters combinations are tested ' +
            'and the results are presented on charts.',
            'https://github.com/kp-marczynski/si-traveling-thief-problem'),
          new PortfolioProject('Medicus', '2019', 'undraw_medicine_b1ol.svg',
            ['Kotlin', 'Spring', 'Angular', 'PostgreSQL', 'Liquibase', 'JHipster', 'Heroku'],
            'App for managing medical history records focused on adding scans of original documents ' +
            'and generating chronological reports with clearly marked abnormal results.',
            'https://github.com/kp-marczynski/medicus'),
          new PortfolioProject(
            'Squid proxy',
            '2019',
            'undraw_destinations_fpv7.svg',
            ['Squid', 'Docker Compose'],
            'Configuration of multiple network topologies using Squid proxy and Docker Compose networking.',
            'https://github.com/kp-marczynski/sw-squid'
          )
          ]
        ),
      new ProjectsYear(
        2018,
        [
          new PortfolioProject('Android Gallery', '2018', 'undraw_organize_photos_d5nr.svg',
            ['Kotlin', 'Android', 'Fresco'],
            'Android gallery and jigsaw puzzle app with optimized images loading and caching using Fresco library.',
            'https://github.com/kp-marczynski/PAM-Android-Gallery')
        ]
      )
    ];
  }
}
