import { Test, TestingModule } from '@nestjs/testing';
import { GeometrieController } from './geometrie.controller';
import { GeometrieService } from './geometrie.service';

describe('GeometrieController', () => {
  let controller: GeometrieController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GeometrieController],
      providers: [GeometrieService],
    }).compile();

    controller = module.get<GeometrieController>(GeometrieController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
