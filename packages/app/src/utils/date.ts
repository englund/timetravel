import { format, getDate, getMonth, getYear } from "date-fns";
import { sv } from "date-fns/locale";

export const formatDate = (date: Date, formatStr = "PP") => {
  return format(date, formatStr, {
    locale: sv,
  });
};

export const isSameDay = (date1: Date, date2: Date): boolean =>
  getYear(date1) === getYear(date2) &&
  getMonth(date1) === getMonth(date2) &&
  getDate(date1) === getDate(date2);
