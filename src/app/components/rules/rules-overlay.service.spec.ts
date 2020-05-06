import { TestBed } from '@angular/core/testing';

import { RulesOverlayService } from './rules-overlay.service';

describe('RulesOverlayService', () => {
  let service: RulesOverlayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RulesOverlayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
