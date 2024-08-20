import type { AuditedEntityDto } from '@abp/ng.core';

export interface CreateUpdateLocationDto {
  locationName: string;
}

export interface LocationDto extends AuditedEntityDto<string> {
  locationName: string;
}
