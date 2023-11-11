import { Test, TestingModule } from '@nestjs/testing';
import { NegozioService } from './negozio.service';

describe('NegozioService', () => {
  let service: NegozioService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NegozioService],
    }).compile();

    service = module.get<NegozioService>(NegozioService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
