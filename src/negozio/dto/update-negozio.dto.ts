import { PartialType } from '@nestjs/swagger';
import { CreateNegozioDto } from './create-negozio.dto';

export class UpdateNegozioDto extends PartialType(CreateNegozioDto) {}
