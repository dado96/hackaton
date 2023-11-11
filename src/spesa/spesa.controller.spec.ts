import { Test, TestingModule } from '@nestjs/testing';
import { SpesaController } from './spesa.controller';
import { SpesaService } from './spesa.service';

describe('SpesaController', () => {
  let controller: SpesaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SpesaController],
      providers: [SpesaService],
    }).compile();

    controller = module.get<SpesaController>(SpesaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
