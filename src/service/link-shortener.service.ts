import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LinkShortenerService {

  constructor() {
  }

  getShortLink(url: string): string {
    const splittedUrl = url.split('//');
    return this.getLinkWithoutParams(splittedUrl[splittedUrl.length - 1]);
  }

  getLinkWithoutParams(url: string): string {
    return url.split('?')[0];
  }
}
