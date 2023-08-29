import { ItemMenu } from '../../models/item-menu';

export class ApmMenu {
  public static getMenu(): Array<ItemMenu> {
    const menu: Array<ItemMenu> = [];
    menu.push({
      icon: 'description',
      description: 'HL Borrador',
      navigated: '/dashboard/apm/bandeja-hl/1',
    });
    menu.push({
      icon: 'file_open',
      description: 'HL Enviado',
      navigated: '/dashboard/apm/bandeja-hl/2',
    });
    menu.push({
      icon: 'task',
      description: 'HL Finalizado',
      navigated: '/dashboard/apm/bandeja-hl/3',
    });
    menu.push({
      icon: 'description',
      description: 'M02 Borrador',
      navigated: '/dashboard/apm/bandeja-m02/1',
    });
    menu.push({
      icon: 'file_open',
      description: 'M02 Enviado',
      navigated: '/dashboard/apm/bandeja-m02/2',
    });
    menu.push({
      icon: 'task',
      description: 'M02 Finalizado',
      navigated: '/dashboard/apm/bandeja-m02/3',
    });
    return menu;
  }

  public static getUrlInitialTray(): string {
    return this.getMenu()[0].navigated;
  }
}
