import { PartialType } from '@nestjs/mapped-types';
import { CreateGeometrieDto } from './create-geometrie.dto';

export class UpdateGeometrieDto extends PartialType(CreateGeometrieDto) {}
