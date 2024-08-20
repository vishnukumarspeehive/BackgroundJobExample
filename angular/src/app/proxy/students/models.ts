import type { AuditedEntityDto } from '@abp/ng.core';

export interface ContactDto extends AuditedEntityDto<string> {
  studentId: string;
  city: string;
  phone: string;
}

export interface CreateUpdateContactDto {
  studentId: string;
  city: string;
  phone: string;
}

export interface CreateUpdateStudentDto {
  firstName: string;
  lastName: string;
  studentId: string;
  contacts: ContactDto[];
}

export interface StudentDto extends AuditedEntityDto<string> {
  firstName: string;
  lastName: string;
  studentId: string;
  contacts: ContactDto[];
}
