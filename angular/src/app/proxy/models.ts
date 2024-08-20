import type { AuditedAggregateRoot } from './volo/abp/domain/entities/auditing/models';

export interface Equipment extends AuditedAggregateRoot<string> {
  sub1Number: string;
  sub1Description: string;
  sub2Number: string;
  sub2Description: string;
  sub3Number: string;
  sub3Description: string;
  sub4Number: string;
  sub4Description: string;
  sub5Number: string;
  sub5Description: string;
  safetylevel: string;
  maker: string;
  model: string;
  equipmenType: string;
  drawingNo: string;
  department: string;
  location: string;
  equipmentStatus: string;
  remark: string;
  vessel: string;
  type: string;
  searchName: string;
  initialReading: number;
  parentId: string;
  key: string;
  node: string;
  title: string;
}

export interface TreeStructure {
  node: string;
  parentId: string;
  title: string;
  key: string;
  children: TreeStructure[];
}
