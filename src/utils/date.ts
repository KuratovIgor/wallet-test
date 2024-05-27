import { format } from 'date-fns'

export class DateUtil {
  public static getFormattedDate(date: Date, dateFormat: string) {
    return format(date, dateFormat)
  }
}
