import { Module } from '@nestjs/common';
import { NegozioService } from './negozio.service';
import { NegozioController } from './negozio.controller';

@Module({
  controllers: [NegozioController],
  providers: [NegozioService]
})
export class NegozioModule {}
