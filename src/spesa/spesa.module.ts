import { Module } from '@nestjs/common';
import { SpesaService } from './spesa.service';
import { SpesaController } from './spesa.controller';

@Module({
  controllers: [SpesaController],
  providers: [SpesaService]
})
export class SpesaModule {}
