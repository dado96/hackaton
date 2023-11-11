import { Module } from '@nestjs/common';
import { ListaProdottiService } from './lista-prodotti.service';
import { ListaProdottiController } from './lista-prodotti.controller';

@Module({
  controllers: [ListaProdottiController],
  providers: [ListaProdottiService]
})
export class ListaProdottiModule {}
