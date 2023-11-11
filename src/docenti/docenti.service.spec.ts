import { Test, TestingModule } from '@nestjs/testing';
import { DocentiService } from './docenti.service';

describe('DocentiService', () => {
  let service: DocentiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DocentiService],
    }).compile();

    service = module.get<DocentiService>(DocentiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
