import { Test, TestingModule } from '@nestjs/testing';
import { ListaProdottiService } from './lista-prodotti.service';

describe('ListaProdottiService', () => {
  let service: ListaProdottiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ListaProdottiService],
    }).compile();

    service = module.get<ListaProdottiService>(ListaProdottiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
