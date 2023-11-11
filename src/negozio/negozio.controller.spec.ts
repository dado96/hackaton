import { Test, TestingModule } from '@nestjs/testing';
import { NegozioController } from './negozio.controller';
import { NegozioService } from './negozio.service';

describe('NegozioController', () => {
  let controller: NegozioController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NegozioController],
      providers: [NegozioService],
    }).compile();

    controller = module.get<NegozioController>(NegozioController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
