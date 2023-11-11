import { PartialType } from '@nestjs/swagger';
import { CreateDocentiDto } from './create-docenti.dto';

export class UpdateDocentiDto extends PartialType(CreateDocentiDto) {}
