import type { AuditedEntityDto } from '@abp/ng.core';

export interface CreateUpdateSafetylevelDto {
  safetylevelName: string;
}

export interface SafetylevelDto extends AuditedEntityDto<string> {
  safetylevelName: string;
}
