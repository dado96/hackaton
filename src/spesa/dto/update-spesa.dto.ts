import { PartialType } from '@nestjs/swagger';
import { CreateSpesaDto } from './create-spesa.dto';

export class UpdateSpesaDto extends PartialType(CreateSpesaDto) {}
