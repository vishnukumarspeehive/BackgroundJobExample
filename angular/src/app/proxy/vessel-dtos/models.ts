import type { AuditedEntityDto } from '@abp/ng.core';

export interface CreateUpdateVesselDto {
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

export interface VesselDto extends AuditedEntityDto<string> {
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
