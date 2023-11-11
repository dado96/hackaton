import { Test, TestingModule } from '@nestjs/testing';
import { CorsiController } from './corsi.controller';
import { CorsiService } from './corsi.service';

describe('CorsiController', () => {
  let controller: CorsiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CorsiController],
      providers: [CorsiService],
    }).compile();

    controller = module.get<CorsiController>(CorsiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
