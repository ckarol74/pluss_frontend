export class DateHelper {
  public static weekdays = {
    shorthand: ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa'],
    longhand: [
      'Domingo',
      'Lunes',
      'Martes',
      'Miércoles',
      'Jueves',
      'Viernes',
      'Sábado',
    ],
  };

  public static staticmonths = {
    shorthand: [
      'Ene',
      'Feb',
      'Mar',
      'Abr',
      'May',
      'Jun',
      'Jul',
      'Ago',
      'Sep',
      'Оct',
      'Nov',
      'Dic',
    ],
    longhand: [
      'Enero',
      'Febrero',
      'Мarzo',
      'Abril',
      'Mayo',
      'Junio',
      'Julio',
      'Agosto',
      'Septiembre',
      'Octubre',
      'Noviembre',
      'Diciembre',
    ],
  };
  public static TransformDateDMY(dateYMD: any): string {
    if (dateYMD) {
      let splitDate = dateYMD.split('-');
      return `${splitDate[2]}-${splitDate[1]}-${splitDate[0]}`;
    } else return '';
  }
  public static TransformDateYMD(dateDMY: any): string {
    if (dateDMY) {
      let splitDate = dateDMY.split('-');
      return `${splitDate[2]}-${splitDate[1]}-${splitDate[0]}`;
    } else return '';
  }

  public static ValidateDateDMY(dateTest: any): boolean {
    return /^\s*(3[01]|[12][0-9]|0?[1-9])\-(1[012]|0?[1-9])\-((?:19|20)\d{2})\s*$/g.test(
      dateTest
    );
  }
}
