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
    return new SkillGroup('Core', ['Java', 'Kotlin', 'Spring', 'Angular', 'TypeScript', 'SQL']);
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
            'Data Processor',
            '2020',
            'undraw_data_processing_yrrv.svg',
            ['Kotlin', 'JUnit', 'Fuel', 'Clikt', 'Mockk', 'Kotlin logging', 'org.JSON'],
            'Script for downloading data from provided source and saving it with selected writer. ' +
            'Easily extensible due to the dynamic configuration based on factories and the separation of supplier, parser and writer layers.',
            'https://github.com/kp-marczynski/data-processor'
          ),
          new PortfolioProject(
            'Barcode Parser',
            '2020',
            'undraw_task_31wc.svg',
            ['Kotlin', 'Kotlintest', 'Android library', 'GS1-128'],
            'Android library for extracting GS1-128 data from barcodes.',
            'https://github.com/kp-marczynski/barcode-parser'
          ),
          new PortfolioProject('Resume & Portfolio', '2020', 'undraw_online_cv_qy9w.svg',
            ['Angular', 'TypeScript', 'HTML', 'SCSS', 'Bootstrap', 'Github Pages'],
            'Web based resume and portfolio designed to automatically provide aesthetically pleasing printable layout for given data. ' +
            'Due to personal data stored in resume repository, only portfolio project is publicly available.',
            'https://github.com/kp-marczynski/portfolio'),
          new PortfolioProject('Ionic Songbook', '2020', 'undraw_listening_1u79.svg',
            ['React', 'Angular', 'TypeScript', 'Ionic', 'IndexedDB', 'Firebase OAuth', 'Firebase Hosting', 'Firestore', 'PWA', 'HTML', 'SCSS'],
            'Songbook developed as a hybrid web app. The first application on the market to offer sharing ' +
            '(and automatic refreshing after change) of the song currently played by the guitarist to all campfire participants.',
            'https://github.com/kp-marczynski/songbook'),
          new PortfolioProject(
            'Smarthome',
            '2020',
            'undraw_smart_home_28oy.svg',
            ['Firebase', 'ESP8266', 'Arduino', 'OAuth', 'Auth0', 'Cloud functions', 'Angular', 'TypeScript', 'Firebase Hosting'],
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
          ),
          new PortfolioProject(
            'Simple IRC Chat',
            '2020',
            'undraw_online_chat_d7ek.svg',
            ['Kotlin', 'Angular', 'TypeScript', 'Websockets', 'RabbitMQ'],
            'IRC chat foundation app.',
            'https://github.com/kp-marczynski/im-chat'
          )
        ]
      ),
      new ProjectsYear(
        2019,
        [
          new PortfolioProject('Dietify', '2019', 'undraw_cookie_love_ulvn.svg',
            ['Java', 'Spring Boot', 'Angular', 'TypeScript', 'Netflix OSS', 'PostgreSQL', 'Liquibase', 'Gradle', 'Docker', ' Gitlab CI/CD', 'JHipster', 'UML', 'JUnit', 'Mockito', 'Heroku'],
            'Diet management system based on microservice architecture designed for my bachelor thesis. ' +
            'Created solution can be used by dietitians in order to conduct comprehensive service of the patient’s visit with particular ' +
            'emphasis on designing the meal plans and sharing them with patients.',
            'https://github.com/kp-marczynski/dietify'),
          new PortfolioProject('Hitchwiki POI', '2019', 'undraw_directions_x53j.svg',
            ['Angular', 'TypeScript', 'Ionic', 'PWA', 'Bootstrap', 'Github Pages', 'SCSS', 'Open Street Map', 'OpenLayers'],
            'Hitchhiker companion app with geolocated "hitchability" points gathered via ' +
            'the Hitchwiki API optimized for offline and low bandwidth usage. ' +
            'Application is deployed online and has been successfully used by many users in real life situations.',
            'https://github.com/kp-marczynski/hitchwiki-poi'),
          new PortfolioProject('Nine Mens Morris', '2019', 'undraw_old_day_6x25.svg',
            ['Angular', 'TypeScript', 'PWA', 'Alpha-Beta Pruning Algorithm', 'Minimax Algorithm', 'Material Design', 'Github Pages'],
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
            ['Kotlin', 'Spring Boot', 'Angular', 'TypeScript', 'PostgreSQL', 'Liquibase', 'JHipster', 'Heroku', 'HTML', 'SCSS', 'Heroku'],
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
          ),
          new PortfolioProject(
            'Constraint satisfaction',
            '2019',
            'undraw_coming_home_52ir.svg',
            ['Java', 'Gradle'],
            'Application for solving constraint satisfaction problem in games futoshiki and skyscrapers.',
            'https://github.com/kp-marczynski/si-constraint-satisfaction-problem'
          ),
          new PortfolioProject(
            'XML RPC',
            '2019',
            'undraw_server_down_s4lk.svg',
            ['XML-RPC', 'Gradle', 'Java'],
            'Realisation of task for Uni \'Distributed IT Systems\' course.',
            'https://github.com/kp-marczynski/rsi-xmlrpc'
          ),
          new PortfolioProject('Oracle',
            '2019',
            'undraw_maintenance_cn7j.svg',
            ['Oracle DB', 'PL/SQL'],
            'Realization of tasks for Uni course \'Oracle databases\'.',
            'https://github.com/kp-marczynski/oracle'
          ),
          new PortfolioProject('Music Store',
            '2019',
            'undraw_happy_music_g6wc.svg',
            ['Docker', 'PHP', '.Net Core', 'JavaScript', 'HTML', 'CSS'],
            'Simple e-commerce application with inventory and authentication written in PHP and consumer order handling in .NET core.',
            'https://github.com/kp-marczynski/webowe'
          )
          ]
        ),
      new ProjectsYear(
        2018,
        [
          new PortfolioProject('Android Gallery', '2018', 'undraw_organize_photos_d5nr.svg',
            ['Kotlin', 'Android', 'Fresco', 'Gradle'],
            'Android gallery and jigsaw puzzle app with optimized images loading and caching using Fresco library.',
            'https://github.com/kp-marczynski/PAM-Android-Gallery'),
          new PortfolioProject('SeriesApp', '2018',
            'undraw_home_cinema_l7yl.svg',
            ['Java', 'Spring Boot', 'Angular', 'TypeScript', 'JHipster', 'MySQL', 'Liquibase', 'Maven', 'Docker Compose', 'JUnit', 'Mockito', 'Swagger', 'UML', 'HTML', 'CSS'],
            'Realization of TV series management project for uni \'Software Design\' course.',
            'https://github.com/kp-marczynski/seriesapp'),
          new PortfolioProject('Battleships', '2018',
            'undraw_Yacht_8g6r.svg',
            ['Java'],
            'Command line battleship game against computer.',
            'https://github.com/kp-marczynski/statki'
          ),
          new PortfolioProject('Scala Akka',
            '2018',
            'undraw_grand_slam_0q5r.svg',
            ['Scala', 'Akka'],
            'Simple showcase of akka usage in ping-pong and ball "games".',
            'https://github.com/kp-marczynski/pp-scala-akka'
            ),
          new PortfolioProject('Scala Concurrency',
            '2018',
            'undraw_in_progress_ql66.svg',
            ['Scala', 'Concurrency'],
            'Concurrency showcase written in scala.',
            'https://github.com/kp-marczynski/pp-scala-concurrency'
          ),
          new PortfolioProject('Reverse polish notation calculator',
            '2018',
            'undraw_Calculator_0evy.svg',
            ['C++'],
            'Command line app for calculator using reverse polish notation.',
            'https://github.com/kp-marczynski/zmpo-reverse-polish-notation-calculator'
          ),
          new PortfolioProject('Sparse Matrix',
            '2018',
            'undraw_hacker_mind_6y85.svg',
            ['C++'],
            'Implementation of sparse matrix data structure.',
            'https://github.com/kp-marczynski/zmpo-sparse-matrix'
          )
        ]
      ),
      new ProjectsYear(2017,
        [
          new PortfolioProject('Assembly',
            '2017',
            'undraw_circuit_board_4c4d.svg',
            ['Assembly'],
            'Implementation of calculator and Vigenère cipher encoder/decoder.',
            'https://github.com/kp-marczynski/assembler'
          ),
          new PortfolioProject('Frame Allocation',
            '2017',
            'undraw_online_popularity_elhc.svg',
            ['Java'],
            'Simulation of different processor frame allocation algorithms.',
            'https://github.com/kp-marczynski/Symulacja-przydzialu-ramek'
          ),
          new PortfolioProject('Binary Search Tree and Heap',
            '2017',
            'undraw_japan_ubgk.svg',
            ['Java'],
            'Basic implementation of Binary Search Tree (BST) and Heap',
            'https://github.com/kp-marczynski/Binary-Search-Tree-and-Heap'
          )
        ]
        )
    ];
  }
}
