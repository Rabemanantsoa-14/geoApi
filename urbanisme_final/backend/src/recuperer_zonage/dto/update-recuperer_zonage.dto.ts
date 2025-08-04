import { PartialType } from '@nestjs/mapped-types';
import { CreateRecupererZonageDto } from './create-recuperer_zonage.dto';

export class UpdateRecupererZonageDto extends PartialType(CreateRecupererZonageDto) {}
