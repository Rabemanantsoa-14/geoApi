import { Test, TestingModule } from '@nestjs/testing';
import { RecupererZonageService } from './recuperer_zonage.service';

describe('RecupererZonageService', () => {
  let service: RecupererZonageService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RecupererZonageService],
    }).compile();

    service = module.get<RecupererZonageService>(RecupererZonageService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
