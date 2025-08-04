import { Test, TestingModule } from '@nestjs/testing';
import { RecupererZonageController } from './recuperer_zonage.controller';
import { RecupererZonageService } from './recuperer_zonage.service';

describe('RecupererZonageController', () => {
  let controller: RecupererZonageController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RecupererZonageController],
      providers: [RecupererZonageService],
    }).compile();

    controller = module.get<RecupererZonageController>(RecupererZonageController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
