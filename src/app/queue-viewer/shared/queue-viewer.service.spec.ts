import { TestBed, inject } from '@angular/core/testing';

import { QueueViewerService } from './queue-viewer.service';

describe('QueueViewerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QueueViewerService]
    });
  });

  it('should be created', inject([QueueViewerService], (service: QueueViewerService) => {
    expect(service).toBeTruthy();
  }));
});
