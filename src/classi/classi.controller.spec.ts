import { Test, TestingModule } from '@nestjs/testing';
import { ClassiController } from './classi.controller';
import { ClassiService } from './classi.service';

describe('ClassiController', () => {
  let controller: ClassiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ClassiController],
      providers: [ClassiService],
    }).compile();

    controller = module.get<ClassiController>(ClassiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
