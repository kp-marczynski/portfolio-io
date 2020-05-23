import { TestBed } from '@angular/core/testing';

import { LinkShortenerService } from './link-shortener.service';

describe('LinkShortenerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LinkShortenerService = TestBed.get(LinkShortenerService);
    expect(service).toBeTruthy();
  });
});
