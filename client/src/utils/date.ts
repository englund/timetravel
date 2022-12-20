import { format } from "date-fns";

import { sv } from "date-fns/locale";

export const formatDate = (date: Date, formatStr = "PP") => {
  return format(date, formatStr, {
    locale: sv,
  });
};
