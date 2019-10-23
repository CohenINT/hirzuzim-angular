import { TestBed } from '@angular/core/testing';

import { AddAudioService } from './add-audio.service';

describe('AddAudioService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddAudioService = TestBed.get(AddAudioService);
    expect(service).toBeTruthy();
  });
});
