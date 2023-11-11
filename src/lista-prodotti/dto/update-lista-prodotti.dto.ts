import { PartialType } from '@nestjs/swagger';
import { CreateListaProdottiDto } from './create-lista-prodotti.dto';

export class UpdateListaProdottiDto extends PartialType(CreateListaProdottiDto) {}
