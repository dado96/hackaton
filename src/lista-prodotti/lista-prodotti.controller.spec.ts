import { Test, TestingModule } from '@nestjs/testing';
import { ListaProdottiController } from './lista-prodotti.controller';
import { ListaProdottiService } from './lista-prodotti.service';

describe('ListaProdottiController', () => {
  let controller: ListaProdottiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ListaProdottiController],
      providers: [ListaProdottiService],
    }).compile();

    controller = module.get<ListaProdottiController>(ListaProdottiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
