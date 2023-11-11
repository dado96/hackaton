import { Test, TestingModule } from '@nestjs/testing';
import { SpesaService } from './spesa.service';

describe('SpesaService', () => {
  let service: SpesaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SpesaService],
    }).compile();

    service = module.get<SpesaService>(SpesaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
