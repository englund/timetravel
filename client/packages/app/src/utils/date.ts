import { compareAsc, format, getDate, getMonth, getYear } from "date-fns";
import { sv } from "date-fns/locale";

export const formatDate = (date: Date, formatStr = "PP"): string => {
  return format(date, formatStr, {
    locale: sv,
  });
};

export const isSameDay = (date1: Date, date2: Date): boolean =>
  getYear(date1) === getYear(date2) &&
  getMonth(date1) === getMonth(date2) &&
  getDate(date1) === getDate(date2);

type GroupByWeek<T> = { [weeknumber: string]: T[] };

export const groupByWeek = <T>(
  list: T[],
  f: (item: T) => Date,
): GroupByWeek<T> =>
  list
    .sort((a, b) => compareAsc(f(a), f(b)))
    .reduce<GroupByWeek<T>>((grouped, item) => {
      const week = formatDate(f(item), "I");
      if (!grouped[week]) {
        grouped[week] = [];
      }
      grouped[week] = [...grouped[week], item];
      return grouped;
    }, {});
