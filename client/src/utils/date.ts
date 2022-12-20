import { format as dateFnsFormat } from "date-fns";
import { sv } from "date-fns/locale";

export const format = (date: Date, formatStr = "PP") => {
  return dateFnsFormat(date, formatStr, {
    locale: sv,
  });
};
