import { PartialType } from '@nestjs/mapped-types';
import { CreateClassiDto } from './create-classi.dto';

export class UpdateClassiDto extends PartialType(CreateClassiDto) {}
