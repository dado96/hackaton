import { Test, TestingModule } from '@nestjs/testing';
import { CorsiService } from './corsi.service';

describe('CorsiService', () => {
  let service: CorsiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CorsiService],
    }).compile();

    service = module.get<CorsiService>(CorsiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
