import { TemplateRef } from '@angular/core';

export interface Column {
  columnDef: string;
  header: string;
  cell: Function;
  template?: TemplateRef<any>;
}
