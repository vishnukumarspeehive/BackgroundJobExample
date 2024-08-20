import type { AuditedEntityDto } from '@abp/ng.core';

export interface CreateUpdateRankDto extends AuditedEntityDto<string> {
  rankName: string;
}

export interface RankDto extends AuditedEntityDto<string> {
  rankName: string;
}
