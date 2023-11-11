import { PartialType } from '@nestjs/swagger';
import { CreateEsamiDto } from './create-esami.dto';

export class UpdateEsamiDto extends PartialType(CreateEsamiDto) {}
