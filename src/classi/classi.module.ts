import { Module } from '@nestjs/common';
import { ClassiService } from './classi.service';
import { ClassiController } from './classi.controller';

@Module({
  controllers: [ClassiController],
  providers: [ClassiService]
})
export class ClassiModule {}
