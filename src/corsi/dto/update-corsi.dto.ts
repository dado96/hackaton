import { PartialType } from '@nestjs/swagger';
import { CreateCorsiDto } from './create-corsi.dto';

export class UpdateCorsiDto extends PartialType(CreateCorsiDto) 
{
}
