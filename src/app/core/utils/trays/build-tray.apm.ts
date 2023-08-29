import { Column } from 'src/app/core/models/column';
import { TemplateRef } from '@angular/core';
import { IFilter } from '../../models/filter';
export class BuildTray {
  static getColumnsHl(
    actions: TemplateRef<any>,
    status: TemplateRef<any>
  ): Array<Column> {
    let tableColumns: Array<Column> = [
      {
        columnDef: 'actions',
        header: 'Acciones',
        cell: (element: Record<string, any>) => `${element['uuid']}`,
        template: actions,
      },
      {
        columnDef: 'id',
        header: 'Id',
        cell: (element: Record<string, any>) => `${element['id']}`,
      },
      {
        columnDef: 'codigoApm',
        header: 'Código',
        cell: (element: Record<string, any>) => `${element['codigoApm']}`,
      },
      {
        columnDef: 'razonSocialVendedor',
        header: 'Razon Social Vendedor',
        cell: (element: Record<string, any>) =>
          `${element['razonSocialVendedor']}`,
      },
      {
        columnDef: 'origenMineral',
        header: 'Origen Mineral',
        cell: (element: Record<string, any>) => `${element['origenMineral']}`,
      },
      {
        columnDef: 'fechaTransaccion',
        header: 'Fecha Transacción',
        cell: (element: Record<string, any>) =>
          `${element['fechaTransaccion']}`,
      },
      {
        columnDef: 'estado',
        header: 'Estado',
        cell: (element: Record<string, any>) => `${element['estado']}`,
        template: status,
      },
    ];
    return tableColumns;
  }

  static getFiltersHl(): Array<IFilter> {
    let filters: Array<IFilter> = [];
    filters.push({ label: 'Id', name: 'id' });
    filters.push({ label: 'Código', name: 'codigoApm' });
    return filters;
  }
}
