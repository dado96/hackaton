import { Module } from '@nestjs/common';
import { CorsiService } from './corsi.service';
import { CorsiController } from './corsi.controller';

@Module({
  controllers: [CorsiController],
  providers: [CorsiService],
})
export class CorsiModule {}
