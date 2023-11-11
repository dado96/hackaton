import { Test, TestingModule } from '@nestjs/testing';
import { DocentiController } from './docenti.controller';
import { DocentiService } from './docenti.service';

describe('DocentiController', () => {
  let controller: DocentiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DocentiController],
      providers: [DocentiService],
    }).compile();

    controller = module.get<DocentiController>(DocentiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
