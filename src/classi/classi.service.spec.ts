import { Test, TestingModule } from '@nestjs/testing';
import { ClassiService } from './classi.service';

describe('ClassiService', () => {
  let service: ClassiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ClassiService],
    }).compile();

    service = module.get<ClassiService>(ClassiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
