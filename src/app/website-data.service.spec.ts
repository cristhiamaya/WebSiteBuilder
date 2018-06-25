import { TestBed, inject } from '@angular/core/testing';

import { WebsiteDataService } from './website-data.service';

describe('WebsiteDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WebsiteDataService]
    });
  });

  it('should be created', inject([WebsiteDataService], (service: WebsiteDataService) => {
    expect(service).toBeTruthy();
  }));
});
