import { Test, TestingModule } from '@nestjs/testing';
import { GeometrieService } from './geometrie.service';

describe('GeometrieService', () => {
  let service: GeometrieService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GeometrieService],
    }).compile();

    service = module.get<GeometrieService>(GeometrieService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
