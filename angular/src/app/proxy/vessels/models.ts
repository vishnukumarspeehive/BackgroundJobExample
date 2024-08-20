import type { AuditedAggregateRoot } from '../volo/abp/domain/entities/auditing/models';

export interface Vessel extends AuditedAggregateRoot<string> {
  vesselName: string;
  vesselType: string;
  imo: string;
  flag: string;
  hullNo: string;
  class: string;
  shipyard: string;
  mainEngine: string;
  auxiliaryEngine: string;
  activeStatus: number;
  file: string;
}
